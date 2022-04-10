import HomePage from "../views/HomePage.vue";

export default [
  {
    path: "/",
    name: "Home page",
    component: HomePage,
  },
  {
    path: "/login-message",
    name: "Login message",
    component: () => import("../views/AuthMessage.vue"),
  },
  {
    path: "*",
    name: "Page not found",
    component: () => import("../views/NotFound.vue"),
  },
];
