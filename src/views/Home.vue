<template lang="pug">
main.index
  div(ref="map", width="600px", height="400px")
  form(:action="`${productsData}`", method="POST", ref="form").index__form
    p.index__form--headline 現在地から検索
    p 現在地からの距離は
    label
      input(type="radio", value="2", name="range", v-model="shop.range")
      span 近め（500m）
    label
      input(type="radio", value="3", name="range", v-model="shop.range", checked)
      span 普通（1000m）
    label
      input(type="radio", value="4", name="range", v-model="shop.range")
      span 幅広く（2000m）
    button(type="submit",:class="{submitActive:shop.lat !== 0}",@click="sendData").index__form--btn {{shop.lat !== 0 ? btnTxt[1] : btnTxt[0]}}
</template>

<script>
/* eslint-disable */
import Mixin from "@/mixins/Mixin.vue";

export default {
  name: "Home",
  mixins: [Mixin],
  data() {
    return {
      res: [],
      btnTxt: ["Loading", "現在地から検索"],
      shop: {
        // key: "5dd40eab2484e976",
        lat: 0,
        lng: 0,
        range: 3,
      },
      map: "",
      fd: [],
    };
  },
  mounted() {
    this.fd = new FormData();
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        function(position) {
          // 緯度経度の取得
          this.shop.lat = position.coords.latitude;
          this.shop.lng = position.coords.longitude;
          // if (window.google) {
          //   this.map = new window.google.maps.Map(this.$refs.map, {
          //     zoom: 13,
          //     shop: this.shop,
          //   });
          //   console.log(window.google);
          // }
        }.bind(this)
      );
    } else {
      // Geolocation APIに対応しておらず、現在位置を取得できない
    }
  },
  methods: {
    sendData(e) {
      e.preventDefault();
      this.fd.append("lat", this.shop.lat);
      this.fd.append("lng", this.shop.lng);
      this.fd.append("range", this.shop.range);
      fetch(`${this.productsData}`, {
        mode: "cors",
        method: "POST",
        body: this.fd,
      })
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          this.$_setShop(json.shop);
          this.$_setShopLength(json.results_available);
        })
        .catch((err) => {
          console.log(err);
        });
      this.$router.push({ path: "Result" });
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";

.index {
  padding: 32px 0;
  &__form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90vw;
    border: 2px solid $lightGray;
    border-radius: 24px;
    font-weight: bold;
    box-shadow: 0 1px 5px rgba($color: #000000, $alpha: 0.25);
    margin: 0 auto 32px;
    padding: 24px 16px;
    &--headline {
      margin: auto auto auto 0;
    }
    &--btn {
      width: 144px;
      height: 32px;
      color: $gray;
      background: $lightGray;
      font-weight: bold;
      margin: 8px auto 0;
      padding: 0 16px;
      border-radius: 16px;
      pointer-events: none;
    }
  }
}
.submitActive {
  color: $white;
  background: $carrot;
  pointer-events: auto;
}
</style>
