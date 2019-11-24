import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export function createRouter() {
  return new Router({
    mode: "history",
    routes: [
      {
        path: "/",
        redirect: "/index"
      },
      {
        path: "/",
        component: resolve => require(["@/layout"], resolve),
        children: [
          {
            name: "Post",
            path: "post",
            component: resolve => require(["@/views/post"], resolve)
          },
          {
            name: "Index",
            path: "index",
            component: resolve => require(["@/views/index"], resolve)
          },
          {
            name: "Item",
            path: "item",
            component: resolve => require(["@/views/item"], resolve)
          },
          {
            name: "Types",
            path: "types",
            component: resolve => require(["@/views/types"], resolve)
          },
          {
            name: "About",
            path: "about",
            component: resolve => require(["@/views/about"], resolve)
          },
          {
            name: "Archive",
            path: "archive",
            component: resolve => require(["@/views/archive"], resolve)
          }
        ]
      }
    ]
  });
}
