<template lang="pug">
article.shopList
	div(@click="watchShop()").shopList__wrap
		div.shopList__wrap--img
			img(:src="`${data.photo.pc.l}`")
		div.shopList__wrap--info
			h2.shopList__wrap--info--name {{data.name}}
			div(v-if="typeof data.mobile_access == 'string'").shopList__wrap--info--data
				svg(xmlns="http://www.w3.org/2000/svg", xmlns:xlink="http://www.w3.org/1999/xlink", width="16", height="16", viewBox="0 0 16 16")
					defs
						clipPath#clip-path
							rect(width="16", height="16", transform="translate(24 310)", fill="none")
					g(transform="translate(-24 -310)", clip-path="url(#clip-path)")
						g(transform="translate(25.412 312)")
							path(d="M50.113,0a4.942,4.942,0,0,0-4.941,4.941C45.172,7.67,49.056,12,50.113,12s4.941-4.33,4.941-7.059A4.941,4.941,0,0,0,50.113,0Zm0,7.209a2.268,2.268,0,1,1,2.268-2.268A2.268,2.268,0,0,1,50.113,7.209Z", transform="translate(-45.172)")
				p {{data.station_name}}駅
			div(v-if="typeof data.budget.average == 'string'").shopList__wrap--info--data
				svg(xmlns="http://www.w3.org/2000/svg", xmlns:xlink="http://www.w3.org/1999/xlink", width="16", height="16", viewBox="0 0 16 16")
					defs
						clipPath#clip-path
							rect(width="16", height="16", transform="translate(24 310)", fill="none")
					g(transform="translate(-24 -310)", clip-path="url(#clip-path)")
						g(transform="translate(-22.964 312)")
							path(d="M58.182,0H55.566L53.317,4.109,51.069,0H48.453l2.639,4.822H48.841V6.649h3.093V7.839H48.841V9.666h3.093V12H54.7V9.666h3.093V7.839H54.7V6.649h3.093V4.822h-2.25Z")
				p {{data.budget.average}}
			div(v-if="typeof data.open == 'string'").shopList__wrap--info--data
				svg(xmlns="http://www.w3.org/2000/svg", width="16", height="16", viewBox="0 0 16 16")
					g(transform="translate(-620 -66)")
						rect(width="16", height="16", transform="translate(620 66)", fill="none")
						g(transform="translate(612.927 68)")
							path(d="M120.9,2.436a.682.682,0,0,0,.681-.682V.681a.682.682,0,0,0-1.363,0V1.754A.682.682,0,0,0,120.9,2.436Z", transform="translate(-110.411)", fill="#4b4b4b")
							path(d="M334.524,2.436a.682.682,0,0,0,.681-.682V.681a.682.682,0,0,0-1.363,0V1.754A.682.682,0,0,0,334.524,2.436Z", transform="translate(-318.868)", fill="#4b4b4b")
							path(d="M17.391,41.287h-.432v.8a1.312,1.312,0,1,1-2.624,0v-.8H11.81v.8a1.312,1.312,0,1,1-2.624,0v-.8H8.755a1.683,1.683,0,0,0-1.682,1.685v8a1.683,1.683,0,0,0,1.682,1.685h8.637a1.683,1.683,0,0,0,1.682-1.685v-8A1.683,1.683,0,0,0,17.391,41.287Zm.358,9.389a.781.781,0,0,1-.779.781H9.176a.781.781,0,0,1-.779-.781V44.417H17.75Z", transform="translate(0 -40.316)", fill="#4b4b4b")
				p {{data.open}}
	FavoriteBtn(:data="data", :shopId="data.id")
</template>

<script>
/* eslint-disable */
import Mixin from "@/mixins/Mixin.vue";
import FavoriteBtn from "@/components/FavoriteBtn.vue";

export default {
  name: "ShopList",
  mixins: [Mixin],
  components: {
    FavoriteBtn,
  },
  props: ["data", "num"],
  methods: {
    watchShop() {
      this.$router.push({
        name: "Shop",
        params: {
          id: this.data.id,
          shopData: this.data,
        },
        props: true,
      });
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";
.shopList {
  margin: 0 auto 16px;
  position: relative;
  &__wrap {
    display: flex;
    align-items: center;
    background: $white;
    transition: 0.2s background;
    position: relative;
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
      height: 124px;
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
        width: calc(100% - 24px - 4px);
        display: -webkit-box;
        font-size: 1.4rem;
        margin: 0 0 8px;
        overflow: hidden;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
      &--data {
        display: flex;
        font-size: 1rem;
        margin: 0 auto;
        svg {
          width: 16px;
          height: 16px;
        }
        p {
          width: calc(100% - 16px);
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }
  .favoriteBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 24px;
    height: 24px;
    position: absolute;
    inset: 16px 16px auto auto;
  }
}
</style>
