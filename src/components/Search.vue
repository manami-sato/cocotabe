<template lang="pug">
main(:style="{height:innerH + 'px'}").search
	Form(:lat="lat", :lng="lng", :filter="false")
	div(@click="searchFlag").search__back 戻る
</template>
<script>
/* eslint-disable */
import Mixin from "@/mixins/Mixin.vue";
import HeadSearch from "@/components/HeadSearch.vue";
import Form from "@/components/Form.vue";

export default {
  name: "Back",
  mixins: [Mixin],
  components: {
    HeadSearch,
    Form,
  },
  data() {
    return {
      lat: 0,
      lng: 0,
    };
  },
  mounted() {
    if (navigator.geolocation) {
      // 位置情報の取得
      navigator.geolocation.getCurrentPosition(
        function(position) {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
        }.bind(this)
      );
    } else {
      console.log("位置情報が取得できませんでした。");
    }
  },
  methods: {
    searchFlag() {
      // Searchコンポーネントの表示非表示を切り替え
      this.$emit("getSearchFlag", false);
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";
.search {
  padding: 64px 0 0;
  width: 100vw;
  background: $white;
  position: fixed;
  inset: 0 0 auto auto;
  z-index: 30;
  &__back {
    font-size: 1.3rem;
    font-weight: bold;
    text-align: center;
  }
  .form {
    box-shadow: none;
    &__filter {
      &--headline {
        pointer-events: none;
      }
    }
  }
}
</style>
