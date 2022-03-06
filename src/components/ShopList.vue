<template lang="pug">
div(v-if="(this.display + 1) * this.num > this.index && this.display * this.num <= this.index", @click="watchShop(index)").result__shop
	div.result__shop--img
		img(:src="`${data.photo.pc.l}`")
	div.result__shop--info
		h2.result__shop--info--name {{data.name}}
		div(v-if="typeof data.mobile_access == 'string'").result__shop--info--data
			svg(xmlns="http://www.w3.org/2000/svg", xmlns:xlink="http://www.w3.org/1999/xlink", width="16", height="16", viewBox="0 0 16 16")
				defs
					clipPath#clip-path
						rect(width="16", height="16", transform="translate(24 310)", fill="none")
				g(transform="translate(-24 -310)", clip-path="url(#clip-path)")
					g(transform="translate(25.412 312)")
						path(d="M50.113,0a4.942,4.942,0,0,0-4.941,4.941C45.172,7.67,49.056,12,50.113,12s4.941-4.33,4.941-7.059A4.941,4.941,0,0,0,50.113,0Zm0,7.209a2.268,2.268,0,1,1,2.268-2.268A2.268,2.268,0,0,1,50.113,7.209Z", transform="translate(-45.172)")
			p {{data.mobile_access}}
		div(v-if="typeof data.budget.average == 'string'").result__shop--info--data
			svg(xmlns="http://www.w3.org/2000/svg", xmlns:xlink="http://www.w3.org/1999/xlink", width="16", height="16", viewBox="0 0 16 16")
				defs
					clipPath#clip-path
						rect(width="16", height="16", transform="translate(24 310)", fill="none")
				g(transform="translate(-24 -310)", clip-path="url(#clip-path)")
					g(transform="translate(-22.964 312)")
						path(d="M58.182,0H55.566L53.317,4.109,51.069,0H48.453l2.639,4.822H48.841V6.649h3.093V7.839H48.841V9.666h3.093V12H54.7V9.666h3.093V7.839H54.7V6.649h3.093V4.822h-2.25Z")
			p {{data.budget.average}}
		div(v-if="typeof data.open == 'string'").result__shop--info--data
			p {{data.open}}
</template>

<script>
/* eslint-disable */
import Mixin from "@/mixins/Mixin.vue";

export default {
  name: "ShopList",
  mixins: [Mixin],
  props: ["data", "index", "display"],
  data() {
    return {
      num: 5,
    };
  },
  methods: {
    watchShop(index) {
      this.$emit("watchShop", index);
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";
.result {
  &__shop {
    display: flex;
    align-items: center;
    // width: 88vw;
    // border-radius: 4px;
    // overflow: hidden;
    // box-shadow: 0 0 10px rgba($color: $vegetable, $alpha: 0.2);
    background: $white;
    margin: 0 auto 16px;
    transition: 0.2s background;
    &:last-of-type {
      margin: 0 auto;
    }
    &:hover {
      background: $lightGray;
    }
    &--img {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 104px;
      height: 136px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    &--info {
      width: calc(100% - 104px);
      padding: 0 16px;
      &--name {
        display: -webkit-box;
        font-size: 1.4rem;
        font-weight: bold;
        margin: 0 0 8px;
        overflow: hidden;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      &--data {
        display: flex;
        // color: $gray;
        font-size: 1rem;
        margin: 0 auto;
        p {
          width: calc(100% - 16px);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
}
</style>
