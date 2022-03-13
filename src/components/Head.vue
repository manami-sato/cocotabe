<template lang="pug">
header.head
  Back(v-if="backFlag")
  h1.head__name {{name}}
</template>

<script>
/* eslint-disable */
import Mixin from "@/mixins/Mixin.vue";
import Back from "@/components/Back.vue";

export default {
  name: "Head",
  mixins: [Mixin],
  components: {
    Back,
  },
  props: ["name", "backFlag"],
  data() {
    return {};
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";
.head {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 80px;
  background: $white;
  border-bottom: 1px solid $lightGray;
  position: fixed;
  inset: 0 0 auto auto;
  z-index: 10;
  &__name {
    width: 70%;
    font-size: 1.6rem;
    line-height: 2.1rem;
    text-align: center;
  }
  .back {
    position: absolute;
    inset: auto auto auto 5%;
  }
}
</style>
