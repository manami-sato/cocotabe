<template lang="pug">
div.result__paging
	div(@click="prevNum()", :class="{arrowDisActive:num == 0}").result__paging--arrow
	ul.result__paging--num
		li(v-for="(item, i) in paging", :class="{pagingActive:i == num}", @click="selectNum(i)").result__paging--num--item {{item}}
	div(@click="nextNum()", :class="{arrowDisActive:num + 1 == paging}").result__paging--arrow
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
      paging: 0,
      formData: [],
    };
  },
  mounted() {
    // ページングが何回必要か算出
    this.paging = Math.ceil(this.$shopLength / this.pagingNum);
  },
  methods: {
    selectNum(i) {
      // 数字を押した
      this.num = i;
      this.dataSet();
    },
    prevNum() {
      // 戻るを押した
      if (this.num !== 0) {
        this.num--;
        this.dataSet();
      }
    },
    nextNum() {
      // 進むを押した
      if (this.num + 1 !== this.pagingNum) {
        this.num++;
        this.dataSet();
      }
    },
    dataSet() {
      // 検索条件の初期化
      this.formData = new FormData();
      // startのみ上書き
      this.$postData[5].key = this.pagingNum * this.num + 1;
      // 検索条件を格納し直す
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
      this.$emit("pageNum", this.num);
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
