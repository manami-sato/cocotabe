<template lang="pug">
div(ref="map").map
</template>

<script>
/* eslint-disable */
import Mixin from "@/mixins/Mixin.vue";
export default {
  mixins: [Mixin],
  props: ["lat", "lng"],
  data() {
    return {
      center: {
        lat: 0,
        lng: 0,
      },
    };
  },
  watch: {
    lat() {
      this.setCenter();
    },
  },
  mounted() {
    if (!window.google) {
      // mapの読み込み
      let script = document.createElement("script");
      script.src =
        `https://maps.googleapis.com/maps/api/js?key=${process.env.VUE_APP_APIKEY_GOOGLEMAP}&callback=initMap`;
      script.async = true;
      document.head.appendChild(script);
      if (this.lat !== 0) {
        this.setCenter();
      }
    }
  },
  methods: {
    setCenter() {
      // propsから取得した現在地をdataに格納
      this.center.lat = this.lat;
      this.center.lng = this.lng;
      if (typeof this.center.lat == "string") {
        // 数値に変換
        this.center.lat = Number(this.center.lat);
        this.center.lng = Number(this.center.lng);
      }
      // mapの表示
      this.map = new window.google.maps.Map(this.$refs.map, {
        zoom: 13,
        center: this.center,
      });
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";
.map {
  width: 100vw;
  height: 256px;
  background: $vegetable;
}
</style>
