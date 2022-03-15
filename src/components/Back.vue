<template lang="pug">
div(@click="back").back
</template>
<script>
/* eslint-disable */
import Mixin from "@/mixins/Mixin.vue";

export default {
  name: "Back",
  mixins: [Mixin],
  methods: {
    back() {
      // 一つ前に戻る
      history.back();
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";
.back {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 13px;
  height: 100%;
  margin: 0 14px 0 0;
  position: relative;
  &::before,
  &::after {
    content: "";
    display: block;
    width: 4px;
    height: 16px;
    background: $carrot;
    margin: auto;
    position: absolute;
  }
  &::before {
    transform: rotateZ(38deg);
    inset: 0 0 10px 0;
  }
  &::after {
    transform: rotateZ(-38deg);
    inset: 10px 0 0 0;
  }
}
</style>
