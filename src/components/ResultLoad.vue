<template lang="pug">
div(:style="{height:innerH + 'px'}").resultLoad
	div.resultLoad__circle
		div.resultLoad__circle--center Loading
</template>
<script>
/* eslint-disable */
import Mixin from "@/mixins/Mixin.vue";

export default {
  name: "ResultLoad",
  mixins: [Mixin],
};
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";
.resultLoad {
  display: flex;
  justify-content: center;
  align-items: center;
  &__circle {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 144px;
    height: 144px;
    position: relative;
    background: $carrot;
    border-radius: 50%;
    overflow: hidden;
    &::before,
    &::after {
      content: "";
      display: block;
      width: 50%;
      height: 100%;
      background: $carrot;
      position: absolute;
      transform: rotateZ(0);
    }
    &::before {
      inset: 0 auto auto 0;
      transform-origin: right center;
      animation: resultLoadAnimationLeft 1s;
      animation-timing-function: linear;
    }
    &::after {
      inset: auto 0 0 auto;
      transform-origin: left center;
      animation: resultLoadAnimationRight 0.5s;
      animation-timing-function: linear;
    }
    &--center {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 104px;
      height: 104px;
      color: $carrot;
      font-weight: bold;
      background: $white;
      border-radius: 50%;
      position: relative;
      z-index: 10;
    }
  }
}

@keyframes resultLoadAnimationRight {
  0% {
    background: $white;
    transform: rotateZ(0);
  }
  100% {
    background: $white;
    transform: rotateZ(180deg);
  }
}

@keyframes resultLoadAnimationLeft {
  0% {
    background: $white;
    transform: rotateZ(0);
  }
  50% {
    background: $white;
    transform: rotateZ(0);
  }
  100% {
    background: $white;
    transform: rotateZ(180deg);
  }
}
</style>
