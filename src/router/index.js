import Vue from "vue";
import VueRouter from "vue-router";
import Landing from "../views/Landing.vue";
import LoginView from "../views/LoginView.vue";
import RegisterView from "../views/RegisterView.vue";
import AdminView from "../views/AdminView.vue";
import CopasView from "../views/CopasView.vue";
import ListProducts from "../components/admin/ListProduct.vue";
import ListSales from "../components/admin/ListSales.vue";
import ListCart from "../components/admin/ListCart.vue";

import Store from "@/store/";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "landing",
    component: Landing,
    meta: {
      nivelDePermiso: "publico",
    },
  },
  {
    path: "/copas",
    name: "copas",
    component: CopasView,
    meta: {
      nivelDePermiso: "publico",
    },
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
    meta: {
      nivelDePermiso: "publico",
    },
  },
  {
    path: "/register",
    name: "register",
    component: RegisterView,
    meta: {
      nivelDePermiso: "publico",
    },
  },
  {
    path: "/admin",
    name: "admin",
    component: AdminView,
    children: [
      {
        path: "products",
        component: ListProducts,
        meta: {
          nivelDePermiso: "privado",
        },
      },
      {
        path: "sales",
        component: ListSales,
        meta: {
          nivelDePermiso: "privado",
        },
      },
      {
        path: "cart",
        component: ListCart,
        meta: {
          nivelDePermiso: "privado",
        },
      },
    ],
    meta: {
      nivelDePermiso: "privado",
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const nivelDePermiso = to.meta.nivelDePermiso;
  const session = Store.state.session;

  //NOTA no se como acceder a este tipo de dato __obj__
  if (nivelDePermiso === "publico") {
    next();
  } else if (nivelDePermiso === "privado") {
    next();
    //nivelDePermiso === "privado" && session.user.roles.customer
  } else if (nivelDePermiso === "privado") {
    next("/");
  }
});

export default router;
