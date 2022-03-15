<template lang="pug">
form(:action="`${productsData}`", method="POST").form
	h1.form__headline 現在地からお店を検索
	section.form__filter
		h2.form__filter--headline ここからの距離は
		div.form__filter--item
			input(type="hidden", name="key", v-model="$postData[0].key")
			input(type="hidden", name="lat", v-model="$postData[1].key")
			input(type="hidden", name="lng", v-model="$postData[2].key")
			input(type="hidden", name="count", v-model="$postData[3].key")
			label
				input(type="radio", value="2", name="range", v-model="$postData[4].key")
				span 近め(500m)
			label
				input(type="radio", value="3", name="range", v-model="$postData[4].key", checked)
				span 普通(1000m)
			label
				input(type="radio", value="5", name="range", v-model="$postData[4].key")
				span 幅広く(2000m)
		h2(@click="filterFlagAction", :class="!filterFlag ? 'filterBtnActive' : 'filterBtnDisActive'").form__filter--headline 詳細に条件を設定
		div(:class="{filterDisActive:filterFlag}").form__filter--wrap
			section(v-for="(filter, i) in filters")
				h3.form__filter--wrap--headline {{filter.ttl}}
				div.form__filter--wrap--item
					label(v-for="(item, i) in filter.form")
						input(type="checkbox", value="1", :name="item.name", @click="filterSend(item.name, item.ttl)")
						span {{item.ttl}}
		button(type="submit", :class="{submitActive:lat !== 0}", @click="sendData").form__btn {{lat !== 0 ? btnTxt[1] : btnTxt[0]}}
</template>

<script>
/* eslint-disable */
import Mixin from "@/mixins/Mixin.vue";

export default {
  name: "Home",
  mixins: [Mixin],
  props: ["lat", "lng", "filter"],
  data() {
    return {
      res: [],
      btnTxt: ["Loading", "検索"],
      formData: [],
      beforeFilterLength: 0,
      filterFlag: false,
      filters: [
        {
          ttl: "食事",
          form: [
            {
              name: "free_drink",
              ttl: "飲み放題がある",
            },
            {
              name: "free_food",
              ttl: "食べ放題がある",
            },
            {
              name: "lunch",
              ttl: "ランチがある",
            },
            {
              name: "midnight_meal",
              ttl: "23時以降も食事可",
            },
          ],
        },
        {
          ttl: "設備・環境",
          form: [
            {
              name: "wifi",
              ttl: "Wi-Fiがある",
            },
            {
              name: "private_room",
              ttl: "個室がある",
            },
            {
              name: "card",
              ttl: "カードが使える",
            },
            {
              name: "non_smoking",
              ttl: "禁煙席がある",
            },
            {
              name: "parking",
              ttl: "駐車場がある",
            },
            {
              name: "charter",
              ttl: "貸切可能",
            },
          ],
        },
      ],
    };
  },
  watch: {
    lat() {
      this.$postData[1].key = this.lat;
      this.$postData[2].key = this.lng;
    },
  },
  mounted() {
    // 検索条件の初期化
    this.formData = new FormData();
    if (this.filters) {
      this.filterFlag = !this.filterFlag;
    }
  },
  methods: {
    filterFlagAction() {
      this.filterFlag = !this.filterFlag;
    },
    sendData(e) {
      e.preventDefault();
      // 検索条件を格納
      for (let i = 0; i < this.$postData.length; i++) {
        this.formData.append(this.$postData[i].name, this.$postData[i].key);
      }
      for (let i = 0; i < this.$filterData.length; i++) {
        this.formData.append(this.$filterData[i], 1);
      }
      // APIを叩く
      fetch(`${this.productsData}`, {
        mode: "cors",
        method: "POST",
        body: this.formData,
        // headers: {
        //   "Access-Control-Allow-Origin": "*",
        //   "Content-type": " application/json",
        // },
        redirect: "manual",
      })
        .then((res) => {
          return res.json();
        })
        .then((json) => {
          this.$_setShop(json.shop);
          this.$_setShopLength(json.results_available);
        })
        .catch((err) => {
          console.log(err);
        });
      this.$router.push({ path: "result" });
    },
    filterSend(checked, ttl) {
      // filterDataの検索、削除及び設定
      this.beforeFilterLength = this.$filterData.length;
      for (let i = 0; i < this.$filterData.length; i++) {
        if (this.$filterData[i] == checked) {
          this.$filterData.splice(i, 1);
          this.$filterTtl.splice(i, 1);
        }
      }
      if (this.beforeFilterLength == this.$filterData.length) {
        this.$filterData.push(checked);
        this.$filterTtl.push(ttl);
      }
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";
.form {
  display: flex;
  flex-direction: column;
  width: 92vw;
  background: $white;
  border-radius: 16px;
  box-shadow: 0 1px 10px rgba($color: #000000, $alpha: 0.1);
  margin: 0 auto;
  padding: 24px 16px;
  &__filter {
    @include filterSet();
    &--wrap {
      height: auto;
      opacity: 1;
      transition: height 0.2s, opacity 0.2s;
      @include filterSet();
      &--headline {
        color: darken($color: $gray, $amount: 10%);
        font-size: 1.4rem;
        font-weight: normal;
        margin: auto auto 8px 0;
      }
    }
    &--headline {
      color: $black;
      font-size: 1.4rem;
      font-weight: bold;
      margin: auto auto 8px 0;
    }
  }
  &__headline {
    font-size: 1.6rem;
    font-weight: bold;
    margin: 0 0 16px;
  }
  &__btn {
    width: 100%;
    height: 40px;
    color: $gray;
    background: $lightGray;
    font-weight: bold;
    font-size: 1.3rem;
    margin: 8px auto 0;
    padding: 0 16px;
    border-radius: 8px;
    pointer-events: none;
    transition: color 0.2s, background 0.2s;
  }
}
.submitActive {
  color: $white;
  background: $carrot;
  pointer-events: auto;
}
.filterDisActive {
  height: 0;
  opacity: 0;
  pointer-events: none;
}
.filterBtnDisActive {
  @include filterBtnSet();
}
.filterBtnActive {
  @include filterBtnSet(
    $beforeRotate: rotateZ(45deg),
    $afterRotate: rotateZ(-45deg)
  );
}
</style>
