<template lang="pug">
main.result
	div.result__filtering
		div.result__filtering--input
			input(type="text",readonly,:placeholder="ph")
			svg(xmlns="http://www.w3.org/2000/svg", width="20", height="20", viewBox="0 0 20 20.001")
				path(d="M258.524,213.751l-3.3-3.3a8.69,8.69,0,1,0-2.958,2.957l3.3,3.3a2.091,2.091,0,0,0,2.957-2.957Zm-6.959-4a5.321,5.321,0,1,1,1.558-3.763A5.3,5.3,0,0,1,251.565,209.748Z", transform="translate(-239.137 -197.319)", fill="#ff9c48")
	ShopList(v-if="$shopLength > 1", v-for="(item, i) in $shop", :data="item", :index="i", :display="getPagingNum", :key="i", @watchShop="getShopNum = $event")
	ShopList(v-if="$shopLength == 1", :data="$shop")
	Paging(:pagingNum="paging", @pagingSet="getPagingNum = $event")
	Navigation
</template>

<script>
/* eslint-disable */
import Mixin from "@/mixins/Mixin.vue";
import ShopList from "@/components/ShopList.vue";
import Paging from "@/components/Paging.vue";
import Navigation from "@/components/Navigation.vue";

export default {
  name: "Result",
  mixins: [Mixin],
  components: {
    ShopList,
    Paging,
    Navigation,
  },
  data() {
    return {
      num: 5,
      paging: 0,
      ph: ["現在地から近い", "100"],
      getPagingNum: 0,
      getShopNum: 0,
    };
  },
  mounted() {
    fetch(`${this.productsData}`)
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        this.$_setShop(json.shop);
        this.$_setShopLength(json.results_available);
        this.paging = Math.ceil(this.$shopLength / this.num);
        console.log(this.$shop[this.getShopNum]);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";
.result {
  padding: 96px 0 120px;
  &__filtering {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 96px;
    // background: $white;
    padding: 8px 0 0;
    position: fixed;
    inset: 0 0 auto auto;
    z-index: 10;
    &--input {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 92vw;
      height: 48px;
      background: $white;
      border: 2px solid $lightGray;
      box-shadow: 0 1px 3px rgba($color: #000000, $alpha: 0.2);
      border-radius: 24px;
      padding: 0 24px;
      &:focus {
        border-style: none;
      }
    }
  }
}
</style>
