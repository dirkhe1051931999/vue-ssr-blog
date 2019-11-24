// 导出函数，并且创建vue实现
import { createApp } from "./app";
export default context => {
  // 异步路由是require动态加载进来的，因此我们这边需要返回一个promise对象。以便服务器能够等待所有的内容在渲染前就已经准备好就绪
  return new Promise((resolve, reject) => {
    const { app, router, store } = createApp();
    router.push(context.url);
    // 确保服务端渲染时服务端和客户端输出的一致
    router.onReady(() => {
      // 获取目标位置或是当前路由匹配的组件数
      // 在服务端渲染的数据预加载时使用
      const matchedComponents = router.getMatchedComponents();
      if (!matchedComponents.length) {
        return reject({ code: 404 });
      }
      // 对所有匹配的路由组件 调用  'asyncData()'
      Promise.all(
        matchedComponents.map(Component => {
          if (Component.asyncData) {
            return Component.asyncData({
              store,
              route: router.currentRoute
            });
          }
        })
      )
        // 在所有预取钩子(preFetch hook) resolve 后，
        // 我们的 store 现在已经填充入渲染应用程序所需的状态。
        // 当我们将状态附加到上下文，
        // 并且 `template` 选项用于 renderer 时，
        // 状态将自动序列化为 `window.__INITIAL_STATE__`，并注入 HTML。
        .then(() => {
          context.state = store.state;
          resolve(app);
        })
        .catch(reject);
    }, reject);
  }).catch(() => {});
};
