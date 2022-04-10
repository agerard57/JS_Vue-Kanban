export default [
  {
    path: "/user/auth",
    props: true,
    name: "Sign up / Login",
    component: () => import("../views/AuthFormPage.vue"),
  },
];
