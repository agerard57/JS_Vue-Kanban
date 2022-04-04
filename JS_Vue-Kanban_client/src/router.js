import Vue from "vue";
import Router from "vue-router";
import HomePage from "./views/HomePage.vue";

Vue.use(Router);

export default new Router({
  mode: "history", // Deactivates the "hash routes" mode (otherwise paths would be /#/page)
  linkExactActiveClass: "active",
  routes: [
    {
      path: "/home",
      name: "Home page",
      component: HomePage,
    },
    {
      path: "/todos",
      name: "Tasks lists",
      component: () => import("./views/TodoList.vue"),
    },
    {
      path: "/add",
      name: "Add a new task",
      component: () => import("./views/TaskForm.vue"),
    },
    {
      path: "/task/:id",
      props: true,
      name: "View task",
      component: () => import("./views/TaskForm.vue"),
    },
    {
      path: "/edit/:id",
      props: true,
      name: "Edit task",
      component: () => import("./views/TaskForm.vue"),
    },
    {
      path: "*",
      name: "Page not found",
      component: () => import("./views/NotFound.vue"),
    },
  ],
});
