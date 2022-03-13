<template lang="pug">
transition(name="loadFadeOut")
	div(:style="{height:innerH + 'px'}").load
		div.load__img
			img(:src="`${imgPath}cocotabe_logo.png`")
</template>
<script>
/* eslint-disable */
import Mixin from "@/mixins/Mixin.vue";

export default {
  name: "Load",
  mixins: [Mixin],
};
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";
.load {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background: $white;
  position: fixed;
  inset: 0 0 auto auto;
  z-index: 15;
  &__img {
    width: 70%;
    img {
      width: 100%;
    }
  }
}
</style>
