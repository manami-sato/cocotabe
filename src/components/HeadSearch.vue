<template lang="pug">
div(:style="{backgroundColor:bg}").headSearch
	Back(v-if="backFlag")
	div(:class="{backActive:backFlag}", @click="headSearchAction").headSearch__form
		input(type="text",readonly,:placeholder="phTxt").headSearch__form--input
		svg(xmlns="http://www.w3.org/2000/svg", width="20", height="20", viewBox="0 0 20 20.001")
			path(d="M258.524,213.751l-3.3-3.3a8.69,8.69,0,1,0-2.958,2.957l3.3,3.3a2.091,2.091,0,0,0,2.957-2.957Zm-6.959-4a5.321,5.321,0,1,1,1.558-3.763A5.3,5.3,0,0,1,251.565,209.748Z", transform="translate(-239.137 -197.319)", fill="#ff9c48")
</template>

<script>
/* eslint-disable */
import Mixin from "@/mixins/Mixin.vue";
import Back from "@/components/Back.vue";
import HeadSearch from "@/components/HeadSearch.vue";
import Form from "@/components/Form.vue";

export default {
  name: "HeadSearch",
  mixins: [Mixin],
  components: {
    Back,
    HeadSearch,
    Form,
  },
  props: ["backFlag", "bg", "phFlag"],
  data() {
    return {
      phTxt: "お店を検索",
      filterPh: ["現在地周辺"],
    };
  },
  mounted() {
    if (!this.phFlag) {
      // テキストの一致を判定し、検索ワードを検索窓に表示
      if (this.$filterTtl == "") {
        this.phTxt = this.filterPh;
      } else {
        this.filterPh.push(this.$filterTtl.join(","));
        this.phTxt = this.filterPh;
      }
    } else {
      this.$filterData.splice(0);
      this.$filterTtl.splice(0);
    }
  },
  methods: {
    headSearchAction() {
      this.$emit("searchFlag", true);
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";
.headSearch {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 96px;
  padding: 8px 0 0;
  position: fixed;
  inset: 0 0 auto auto;
  z-index: 10;
  &__form {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: calc(84vw + 13px + 14px);
    height: 48px;
    background: $white;
    border: 2px solid $lightGray;
    box-shadow: 0 1px 3px rgba($color: #000000, $alpha: 0.2);
    border-radius: 24px;
    padding: 0 24px;
    &:focus {
      border-style: none;
    }
    &--input {
      width: 100%;
      padding: 0 16px 0 0;
    }
  }
  &__tab {
    @include mainPaddingSet();
    position: fixed;
    inset: auto auto 0 0;
    .form {
      box-shadow: none;
      &__filter {
        &--headline {
          pointer-events: none;
        }
      }
    }
  }
}
.backActive {
  width: 84vw;
}
</style>
