/* eslint-disable */

import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

Vue.config.productionTip = false;

let GlobalData = new Vue({
  data() {
    return {
      $shop: [],
      $shopLength: 0,
      $loadFlag: true,
      $filterData: [],
      $filterTtl: [],
    };
  },
});

Vue.mixin({
  methods: {
    // <script>
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
    $_loadFlag() {
      return GlobalData.$data.$loadFlag;
    },
    $_setLoadFlag(newLoadFlag) {
      GlobalData.$data.$loadFlag = newLoadFlag;
    },
    $_filterData() {
      return GlobalData.$data.$filterData;
    },
    $_setfilterData(newfilter) {
      GlobalData.$data.$filterData = newfilter;
    },
    $_filterTtl() {
      return GlobalData.$data.$filterTtl;
    },
    $_setfilterTtl(newfilterTtl) {
      GlobalData.$data.$filterTtl = newfilterTtl;
    },
  },
  computed: {
    // <template>
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
    $loadFlag: {
      get: function() {
        return GlobalData.$data.$loadFlag;
      },
      set: function(newLoadFlag) {
        GlobalData.$data.$loadFlag = newLoadFlag;
      },
    },
    $filterData: {
      get: function() {
        return GlobalData.$data.$filterData;
      },
      set: function(newfilter) {
        GlobalData.$data.$filterData = newfilter;
      },
    },
    $filterTtl: {
      get: function() {
        return GlobalData.$data.$filterTtl;
      },
      set: function(newfilterTtl) {
        GlobalData.$data.$filterTtl = newfilterTtl;
      },
    },
  },
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
