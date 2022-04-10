export default [
  {
    path: "/todos",
    name: "Tasks lists",
    component: () => import("../views/TodoList.vue"),
  },
  {
    path: "/add",
    props: true,
    name: "Add a new task",
    component: () => import("../views/TaskFormPage.vue"),
  },
  {
    path: "/task/:id",
    props: true,
    name: "View task",
    component: () => import("../views/TaskFormPage.vue"),
  },
  {
    path: "/edit/:id",
    props: true,
    name: "Edit task",
    component: () => import("../views/TaskFormPage.vue"),
  },
];
