// 创建应用程序，并且将其挂载到DOM中
import { createApp } from "./app";
const { app, router, store } = createApp();
// 确保服务端渲染时服务端和客户端输出的一致
if (window.__INITIAL_STATE__) {
  // 替换 store 的根状态
  store.replaceState(window.__INITIAL_STATE__);
}
router.onReady(() => {
  router.beforeResolve((to, from, next) => {
    const matched = router.getMatchedComponents(to);
    const prevMatched = router.getMatchedComponents(from);
    let diffed = false;
    const activated = matched.filter((c, i) => {
      return diffed || (diffed = prevMatched[i] !== c);
    });

    if (!activated.length) {
      return next();
    }
    Promise.all(
      activated.map(c => {
        if (c.asyncData) {
          return c.asyncData({ store, route: to });
        }
      })
    )
      .then(() => {
        next();
      })
      .catch(next);
  });
  app.$mount("#app");
});
