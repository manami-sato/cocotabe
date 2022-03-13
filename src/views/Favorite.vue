<template lang="pug">
main(:class="{favHit:favList.length > 0}").favorite
	Head(name="お気に入り", :backFlag="false")
	ShopList(v-for="(item, i) in favList", :data="item", :index="i", :display="getPagingNum", :num="num", :key="i", @watchShop="getShopNum = $event")
	p(v-if="favList.length == 0", :style="{height:innerH + 'px'}").result__noHit
		span.favorite__noHit--headline お気に入り登録したお店がありません。
		span.favorite__noHit--txt 検索して、気になるお店を探してみましょう。
		router-link(:to="{name:'Home'}").favorite__noHit--btn お店を検索する
	Navigation(active="Favorite")
</template>

<script>
/* eslint-disable */
import Mixin from "@/mixins/Mixin.vue";
import Head from "@/components/Head.vue";
import ShopList from "@/components/ShopList.vue";
import Navigation from "@/components/Navigation.vue";

export default {
  name: "Favorite",
  mixins: [Mixin],
  components: {
    Head,
    ShopList,
    Navigation,
  },
  data() {
    return {
      favList: [],
      num: 10,
      paging: 0,
      getPagingNum: 0,
      getShopNum: 999,
    };
  },
  mounted() {
    this.favList = JSON.parse(localStorage.getItem("favorite"));
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";
.favorite {
  @include noHitSet();
}
.favHit {
  @include mainPaddingSet();
}
</style>
