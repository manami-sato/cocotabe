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
      $strageData: [],
      $beforeStrageDataLength: 0,
      $postData: [
        {
          name: "key",
          key: process.env.VUE_APP_APIKEY_HOTPEPPER,
        },
        {
          name: "lat",
          key: 0,
        },
        {
          name: "lng",
          key: 0,
        },
        {
          name: "count",
          key: 10,
        },
        {
          name: "range",
          key: 3,
        },
        {
          name: "start",
          key: 1,
        },
      ],
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
    $_setfilterTtl(newFilterTtl) {
      GlobalData.$data.$filterTtl = newFilterTtl;
    },
    $_strageData() {
      return GlobalData.$data.$strageData;
    },
    $_setStrageData(newStrageData) {
      GlobalData.$data.$strageData = newStrageData;
    },
    $_beforeStrageDataLength() {
      return GlobalData.$data.$beforeStrageDataLength;
    },
    $_setBeforeStrageDataLength(newBeforeStrageDataLength) {
      GlobalData.$data.$beforeStrageDataLength = newBeforeStrageDataLength;
    },
    $_postData() {
      return GlobalData.$data.$postData;
    },
    $_setPostData(newPostData) {
      GlobalData.$data.$postData = newPostData;
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
      set: function(newfilterData) {
        GlobalData.$data.$filterData = newfilterData;
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
    $strageData: {
      get: function() {
        return GlobalData.$data.$strageData;
      },
      set: function(newStrageData) {
        GlobalData.$data.$strageData = newStrageData;
      },
    },
    $beforeStrageDataLength: {
      get: function() {
        return GlobalData.$data.$beforeStrageDataLength;
      },
      set: function(newBeforeStrageDataLength) {
        GlobalData.$data.$beforeStrageDataLength = newBeforeStrageDataLength;
      },
    },
    $postData: {
      get: function() {
        return GlobalData.$data.$postData;
      },
      set: function(newPostData) {
        GlobalData.$data.$postData = newPostData;
      },
    },
  },
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
