import {
  createRouter,
  RouteRecordRaw,
  Router,
  createWebHistory,
} from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/home/index.vue"),
    meta: {
      title: "首页",
    },
  },
];

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
