<template lang="pug">
main.shop
	Head(:name="data.name", :backFlag="true")
	div.shop__headline
		div.shop__headline--info
			div.shop__headline--info--img
				img(:src="data.logo_image")
			h2.shop__headline--info--name {{data.name}}
	section.shop__detail
		h3.shop__detail--headline 店舗情報
		table.shop__detail--data
			tr
				th アクセス
				td {{data.access}}
			tr
				th 営業時間
				td {{data.open}}
			tr
				th 店舗住所
				td {{data.address}}
			tr
				th 最寄駅
				td {{data.station_name}}
	section.shop__detail
		h3.shop__detail--headline 詳細情報
		table.shop__detail--data
			tr
				th Wi-Fi設備
				td {{data.wifi}}
			tr
				th カード決済
				td {{data.card}}
			tr
				th 禁煙席の有無
				td {{data.non_smoking}}
			tr
				th 飲み放題
				td {{data.free_drink}}
			tr
				th 食べ放題
				td {{data.free_food}}
			tr
				th 駐車場の有無
				td {{data.parking}}
			tr
				th 貸切
				td {{data.charter}}
			tr
				th 個室の有無
				td {{data.private_room}}
			tr
				th ランチタイム
				td {{data.lunch}}
			tr
				th 23時以降
				td {{data.midnight_meal}}
	div.shop__contact
		div.shop__contact--icon
			FavoriteBtn(:data="data", :shopId="shopId")
			span お気に入り
		div.shop__contact--icon
			svg(version="1.1", xmlns="http://www.w3.org/2000/svg", xmlns:xlink="http://www.w3.org/1999/xlink", x="0px", y="0px", viewBox="0 0 512 512", xml:space="preserve")
				g
					path(d="M94.811,21.696c-35.18,22.816-42.091,94.135-28.809,152.262c10.344,45.266,32.336,105.987,69.42,163.165\c34.886,53.79,83.557,102.022,120.669,129.928c47.657,35.832,115.594,58.608,150.774,35.792\c17.789-11.537,44.218-43.058,45.424-48.714c0,0-15.498-23.896-18.899-29.14l-51.972-80.135\c-3.862-5.955-28.082-0.512-40.386,6.457c-16.597,9.404-31.882,34.636-31.882,34.636c-11.38,6.575-20.912,0.024-40.828-9.142\c-24.477-11.262-51.997-46.254-73.9-77.947c-20.005-32.923-40.732-72.322-41.032-99.264c-0.247-21.922-2.341-33.296,8.304-41.006\c0,0,29.272-3.666,44.627-14.984c11.381-8.392,26.228-28.286,22.366-34.242l-51.972-80.134c-3.401-5.244-18.899-29.14-18.899-29.14\C152.159-1.117,112.6,10.159,94.811,21.696z")
			span 電話する
		a(:href="`http://maps.apple.com/?q=${data.lat},${data.lng}`").shop__contact--map 地図アプリを開く
</template>

<script>
/* eslint-disable */
import Mixin from "@/mixins/Mixin.vue";
import Head from "@/components/Head.vue";
import FavoriteBtn from "@/components/FavoriteBtn.vue";

export default {
  name: "Shop",
  mixins: [Mixin],
  components: {
    Head,
    FavoriteBtn,
  },
  props: { id: String, shopData: Array },
  data() {
    return {
      data: "",
      shopId: "",
      detail: [
        {
          ttl: "アクセス",
          data: "shopData.access",
        },
        {
          ttl: "営業時間",
          data: "shopData.open",
        },
        {
          ttl: "店舗所在地",
          data: "shopData.address",
        },
        {
          ttl: "最寄駅",
          data: "shopData.station_name",
        },
        {
          ttl: "Wi-Fi設備",
          data: "shopData.wifi",
        },
        {
          ttl: "カード決済",
          data: "shopData.card",
        },
        {
          ttl: "禁煙席の有無",
          data: "shopData.non_smoking",
        },
        {
          ttl: "飲み放題",
          data: "shopData.free_drink",
        },
        {
          ttl: "食べ放題",
          data: "shopData.free_food",
        },
        {
          ttl: "駐車場の有無",
          data: "shopData.parking",
        },
        {
          ttl: "貸切",
          data: "shopData.charter",
        },
        {
          ttl: "個室の有無",
          data: "shopData.private_room",
        },
        {
          ttl: "ランチタイム",
          data: "shopData.lunch",
        },
        {
          ttl: "23時以降",
          data: "shopData.midnight_meal",
        },
      ],
    };
  },
  mounted() {
    // propsを変数に格納
    if (this.$route.params.id) {
      this.shopId = this.$route.params.id;
      this.data = this.$route.params.shopData;
    }
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";
.shop {
  @include mainPaddingSet();
  &__headline {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    &--info {
      display: flex;
      align-items: center;
      gap: 5%;
      width: 90vw;
      &--img {
        width: 96px;
        height: 96px;
        border-radius: 50%;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
      &--name {
        width: calc(100% - 96px - 5%);
        font-size: 1.6rem;
      }
    }
  }
  &__detail {
    margin: 0 auto;
    &--headline {
      margin: 24px 16px 16px;
    }
    &--data {
      border-spacing: 0;
      th {
        width: 25%;
        min-width: 72px;
        height: 100%;
        background: rgba($color: $vegetable, $alpha: 0.4);
        vertical-align: top;
        padding: 8px 8px;
      }
      td {
        width: 75%;
        padding: 8px 16px;
      }
    }
  }
  &__contact {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 4%;
    width: 100vw;
    height: 96px;
    background: $white;
    border-top: 1px solid $lightGray;
    font-size: 1.5rem;
    font-weight: bold;
    padding: 10px 0 0;
    position: fixed;
    inset: auto auto 0 0;
    &--icon {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      height: 58px;
      svg {
        width: 28px;
        height: 28px;
        margin: 4px 0;
      }
      span {
        font-size: 1rem;
      }
    }
    &--tel {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      width: 30%;
      height: 58px;
      color: $carrot;
      border: $carrot 3px solid;
      border-radius: calc(58px / 2);
    }
    &--map {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50%;
      height: 58px;
      color: $white;
      background: $carrot;
      border-radius: calc(58px / 2);
    }
  }
}
</style>
