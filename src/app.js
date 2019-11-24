import Vue from "vue";
import App from "@/App.vue";
import { createRouter } from "@/router";
import { createStore } from "@/store/index";
import "@/icons";
import { sync } from "vuex-router-sync";
import MetaInfo from "vue-meta-info";
Vue.use(MetaInfo);
// 导出函数，用于创建新的应用程序
export function createApp() {
  // 创建 router的实列
  const router = createRouter();
  const store = createStore();
  //  把 vue-router 的状态放入 vuex 的 state 中
  // 以下3个可以从vuex取得并使用
  // store.state.route.path
  // store.state.route.params
  // store.state.route.query
  sync(store, router);
  const app = new Vue({
    store,
    router,
    // 根据实列简单的渲染应用程序组件
    render: h => h(App)
  });
  return { app, router, store };
}
