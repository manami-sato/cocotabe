<template lang="pug">
div.result__paging
	div(@click="prevNum(num)", :class="{arrowDisActive:num == 0}").result__paging--arrow
	ul.result__paging--num
		li(v-for="(item, i) in pagingNum", :class="{pagingActive:i == num}", @click="selectNum(i)").result__paging--num--item {{item}}
	div(@click="nextNum(num)", :class="{arrowDisActive:num + 1 == pagingNum}").result__paging--arrow
</template>

<script>
/* eslint-disable */
import Mixin from "@/mixins/Mixin.vue";

export default {
  name: "Paging",
  mixins: [Mixin],
  props: ["pagingNum"],
  data() {
    return {
      num: 0,
    };
  },
  mounted() {},
  methods: {
    selectNum(i) {
      this.num = i;
      this.$emit("pagingSet", this.num);
    },
    prevNum(num) {
      this.num--;
      if (this.num < 0) {
        this.num = 0;
      }
      this.$emit("pagingSet", this.num);
    },
    nextNum(num) {
      this.num++;
      if (this.num == this.pagingNum) {
        this.num--;
      }
      this.$emit("pagingSet", this.num);
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";
.result {
  &__paging {
    display: flex;
    justify-content: center;
    gap: 24px;
    margin: 24px 0 0;
    &--num {
      display: flex;
      gap: 8px;
      &--item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 40px;
        height: 40px;
        color: $carrot;
        background: $white;
        border: 1px solid $carrot;
        border-radius: 50%;
        font-weight: bold;
        transition: 0.2s color, 0.2s background;
        position: relative;
      }
    }
    &--arrow {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 16px;
      height: 40px;
      position: relative;
      &::before,
      &::after {
        content: "";
        display: block;
        width: 4px;
        height: 12px;
        background: $carrot;
        margin: auto;
        position: absolute;
      }
      &:first-of-type {
        &::before {
          transform: rotateZ(45deg);
          inset: 0 0 6px 0;
        }
        &::after {
          transform: rotateZ(-45deg);
          inset: 6px 0 0 0;
        }
      }
      &:last-of-type {
        &::before {
          transform: rotateZ(-45deg);
          inset: 0 0 6px 0;
        }
        &::after {
          transform: rotateZ(45deg);
          inset: 6px 0 0 0;
        }
      }
    }
  }
}
.pagingActive {
  color: $white;
  background: $carrot;
  border: 1px solid $carrot;
}
.arrowDisActive {
  opacity: 0;
  pointer-events: none;
}
</style>
