/* eslint-disable */

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Result from "../views/Result.vue";
import Shop from "../views/Shop.vue";
import Favorite from "../views/Favorite.vue";

Vue.use(VueRouter);
const route = "/";

const routes = [
  {
    path: `${route}`,
    name: "Home",
    component: Home,
  },
  {
    path: `${route}result`,
    name: "Result",
    component: Result,
  },
  {
    path: `${route}shop/:id`,
    name: "Shop",
    component: Shop,
    props: (route) => ({
      id: String(route.params.id),
      shopData: Array(route.params.shopData),
    }),
  },
  {
    path: `${route}favorite`,
    name: "Favorite",
    component: Favorite,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
