/* eslint-disable */

import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

Vue.config.productionTip = false;

// 1. グローバル変数を定義する
let GlobalData = new Vue({
  data() {
    return {
      $shop: [],
      $shopLength: "",
    };
  },
});

// 2. mixin でグローバル変数をラッピングする
Vue.mixin({
  methods: {
    // 2-1. 各コンポーネント内の<script>タグ内でグローバル変数を参照するための関数
    $_shop() {
      return GlobalData.$data.$shop;
    },
    $_setShop(newShop) {
      GlobalData.$data.$shop = newShop;
    },
    $_shopLength() {
      return GlobalData.$data.$shopLength;
    },
    $_setShopLength(newShopLength) {
      GlobalData.$data.$shopLength = newShopLength;
    },
  },
  computed: {
    // 2-2. 各コンポーネント内の<template>タグ内でグローバル変数を参照するための処置
    $shop: {
      get: function() {
        return GlobalData.$data.$shop;
      },
      set: function(newShop) {
        GlobalData.$data.$shop = newShop;
      },
    },
    $shopLength: {
      get: function() {
        return GlobalData.$data.$shopLength;
      },
      set: function(newShopLength) {
        GlobalData.$data.$shopLength = newShopLength;
      },
    },
  },
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
