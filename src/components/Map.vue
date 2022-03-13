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
      this.center.lat = this.lat;
      this.center.lng = this.lng;
      if (typeof this.center.lat == "string") {
        this.center.lat = Number(this.center.lat);
        this.center.lng = Number(this.center.lng);
      }
      this.map = new window.google.maps.Map(this.$refs.map, {
        zoom: 13,
        center: this.center,
      });
    },
  },
  mounted() {
    if (!window.google) {
      let script = document.createElement("script");
      script.src =
        "https://maps.googleapis.com/maps/api/js?key=AIzaSyAXLilhMM-FWumKmHciwsjdSrJ-SBx_3bQ&callback=initMap";
      script.async = true;
      document.head.appendChild(script);
    }
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
