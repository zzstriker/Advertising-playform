import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/views/main.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import("../views/Login/Login.vue")
  },
  {
    path: "/main",
    component: Layout,
    name: "Home",
    children: [
      {
        path: "/",
        redirect: "/"
      },
      {
        path: '/main/home',
        component: () => import('@/views/Home/Home.vue'),
        meta: {
          title: 'Home'
        }
      },
      {
        path: "/main/tool",
        name: "Tool",
        component: () => import("../views/Tools/Tool.vue"),
      },
      {
        path: "/main/createRule",
        name: "Tool",
        component: () => import("../views/Tools/createBlankRules.vue"),
      },
      {
        path: "/main/campaigns",
        name: "Campaigns",
        component: () =>
          import("../views/Campaigns/Campaigns.vue")
      },
      {
        path: "/main/report",
        name: "Report",
        component: () =>
          import("../views/Report/Report.vue")
      }
    ]
  },
  {
    path: "/user",
    name: "User",
    component: () =>
      import("../views/User/User.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
