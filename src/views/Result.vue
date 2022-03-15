<template lang="pug">
main(:class="{resultHit:$shopLength > 0}").result
	HeadSearch(:backFlag="true", bg="#ffffff", :phFlag="false", @searchFlag="getSearchFlag = $event")
	ResultLoad(v-if="!resultLoadFlag")
	transition(name="resultFadeIn")
		section(v-if="resultLoadFlag")
			h1(v-if="resultFlag").result__hit 全
				span.result__hit--length {{$shopLength}}
				|件中
				span.result__hit--length {{displayNum}}
				|件以降を表示しています
			div(v-else, :style="{height:innerH + 'px'}").result__noHit
				h1.result__noHit--headline ごめんなさい、お店がヒットしないようです。
				span.result__noHit--txt 検索条件を減らしたり、検索範囲を広げると見つかるかもしれません。
			ShopList(v-if="$shopLength > 1", v-for="(item, i) in $shop", :data="item", :num="num", :key="i")
			ShopList(v-if="$shopLength == 1", :data="$shop", :num="num")
			Paging(:pagingNum="num", :pageId="pageId", @pageNum="getPageNum = $event")
	Navigation(active="Home")
	Search(v-if="getSearchFlag", @getSearchFlag="getSearchFlag = $event")
</template>

<script>
/* eslint-disable */
import Mixin from "@/mixins/Mixin.vue";
import HeadSearch from "@/components/HeadSearch.vue";
import ResultLoad from "@/components/ResultLoad.vue";
import ShopList from "@/components/ShopList.vue";
import Paging from "@/components/Paging.vue";
import Search from "@/components/Search.vue";
import Navigation from "@/components/Navigation.vue";

export default {
  name: "Result",
  mixins: [Mixin],
  components: {
    HeadSearch,
    ResultLoad,
    ShopList,
    Paging,
    Search,
    Navigation,
  },
  data() {
    return {
      num: 10,
      getPageNum: 0,
      displayNum: 1,
      pageId: 0,
      resultFlag: "",
      resultLoadFlag: false,
      searchFlag: false,
      getSearchFlag: false,
    };
  },
  watch: {
    getPageNum(n) {
      this.displayNum = n * 10 + 1;
    },
  },
  mounted() {
    setTimeout(() => {
      this.resultLoadFlag = !this.resultLoadFlag;
      if (this.$shopLength > 0) {
        this.resultFlag = true;
      } else {
        this.resultFlag = false;
      }
    }, 1100);
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";
.result {
  &__hit {
    font-size: 1.2rem;
    font-weight: normal;
    margin: 8px 24px 16px;
    &--length {
      font-size: 1.8rem;
      font-weight: bold;
      margin: 0 4px;
    }
  }
  @include noHitSet();
}
.resultHit {
  @include mainPaddingSet();
}
.resultFadeIn-leave-active,
.resultFadeIn-enter-active {
  transition: opacity 0.5s;
}
.resultFadeIn-enter,
.resultFadeIn-leave-to {
  opacity: 0;
}
</style>
