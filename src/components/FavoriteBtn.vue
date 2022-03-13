<template lang="pug">
svg(@click="favoriteSet()", version="1.1", xmlns="http://www.w3.org/2000/svg", xmlns:xlink="http://www.w3.org/1999/xlink", x="0px", y="0px", viewBox="0 0 512 512", xml:space="preserve").favoriteBtn
  g
    path(v-if="favFlag", :d="favPath[1]").favoriteBtn__path.favActive
    path(v-else, :d="favPath[0]").favoriteBtn__path
</template>
<script>
/* eslint-disable */
import Mixin from "@/mixins/Mixin.vue";
import common from "@/assets/js/common.js";

export default {
  name: "FavoriteBtn",
  mixins: [Mixin],
  props: ["data", "shopId"],
  data() {
    return {
      favFlag: false,
      favPath: [
        `M256,480.1c-7.9,0-15.8-3-21.8-9L42.5,279.4C15.1,252,0,215.6,0,176.8c0-38.7,15.1-75.1,42.5-102.5\C69.8,46.9,106.2,31.9,145,31.9c38.7,0,75.1,15.1,102.5,42.5c3,3,5.8,6.1,8.5,9.3c2.7-3.2,5.5-6.3,8.5-9.3\c27.4-27.4,63.8-42.5,102.5-42.5c38.7,0,75.1,15.1,102.5,42.5c27.4,27.4,42.5,63.8,42.5,102.5c0,38.7-15.1,75.1-42.5,102.5\L277.8,471.1C271.7,477.1,263.9,480.1,256,480.1z M145,93.4c-22.3,0-43.2,8.7-59,24.4c-15.8,15.8-24.4,36.7-24.4,59\c0,22.3,8.7,43.2,24.4,59l170,170l170-170c15.8-15.7,24.4-36.7,24.4-59c0-22.3-8.7-43.2-24.4-59c0,0,0,0,0,0\c-15.8-15.8-36.7-24.4-59-24.4c-22.3,0-43.2,8.7-59,24.4c-10.9,10.9-18.5,24.5-22.1,39.4c-3.3,13.8-15.7,23.6-29.9,23.6\c0,0,0,0,0,0c-14.2,0-26.6-9.8-29.9-23.6c-3.6-14.9-11.2-28.5-22.1-39.4C188.2,102.1,167.3,93.4,145,93.4z`,
        `M469.5,74.4a144.85,144.85,0,0,0-205,0c-3,3-5.8,6.1-8.5,9.3-2.7-3.2-5.5-6.3-8.5-9.3a145,145,0,1,0-205,205L234.2,471.1a30.9,30.9,0,0,0,43.6,0L469.5,279.4a144.85,144.85,0,0,0,0-205Z`,
      ],
    };
  },
  methods: {
    favoriteSet() {
      if (common.strageData) {
        common.beforeStrageDataLength = common.strageData.length;
        for (let i = 0; i < common.strageData.length; i++) {
          if (common.strageData[i].id == this.shopId) {
            common.strageData.splice(i, 1);
            this.favFlag = false;
          }
        }
        if (common.strageData.length == common.beforeStrageDataLength) {
          common.strageData.push(this.data);
          this.favFlag = true;
        }
      } else {
        common.strageData.push(this.data);
        this.favFlag = true;
      }
      localStorage.removeItem("favorite");
      localStorage.setItem("favorite", JSON.stringify(common.strageData));
    },
  },
  mounted() {
    if (JSON.parse(localStorage.getItem("favorite"))) {
      common.strageData = JSON.parse(localStorage.getItem("favorite"));
      for (let i = 0; i < common.strageData.length; i++) {
        if (this.shopId == common.strageData[i].id) {
          this.favFlag = true;
        }
      }
    }
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";
.favoriteBtn {
  &__path {
    fill: $gray;
  }
}
.favActive {
  fill: $vegetable;
}
</style>
