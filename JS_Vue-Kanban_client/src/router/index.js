import Vue from "vue";
import Router from "vue-router";

import authRoutes from "./auth.routes";
import todosRoutes from "./todos.routes";
import coreRoutes from "./core.routes";

Vue.use(Router);

export default new Router({
  mode: "history", // Deactivates the "hash routes" mode (otherwise paths would be /#/page)

  linkExactActiveClass: "active",

  routes: [...authRoutes, ...todosRoutes, ...coreRoutes],
});
