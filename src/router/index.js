/* eslint-disable */

import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Result from "../views/Result.vue";
import Shop from "../views/Shop.vue";

Vue.use(VueRouter);
const route = "/";
// const route = "/ecc/msatou/test/";
// manami-sato.github.io/cocotabe/

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
    path: `${route}shop:id`,
    name: "Shop",
    component: Shop,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
