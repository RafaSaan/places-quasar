const routes = [
  {
    name: "authLayout",
    path: "/",
    component: () => import("../modules/Auth/layouts/AuthLayout.vue"),
    children: [
      {
        path: "",
        name: "login",
        component: () => import("../modules/Auth/views/LoginView.vue"),
      },
      {
        path: "register",
        name: "register",
        component: () => import("../modules/Auth/views/RegisterView.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
