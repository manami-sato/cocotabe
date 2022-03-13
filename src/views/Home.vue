<template lang="pug">
main.index
	transition(name="loadFadeOut")
		Load(v-if="$loadFlag")
	HeadSearch(:backFlag="false", bg="transparent", :phFlag="true", @searchFlag="getSearchFlag = $event")
	Map(:lat="lat", :lng="lng")
	Form(:lat="lat", :lng="lng", :filter="true")
	Navigation(active="Home")
	Search(v-if="getSearchFlag", @getSearchFlag="getSearchFlag = $event")
</template>

<script>
/* eslint-disable */
import Mixin from "@/mixins/Mixin.vue";
import Load from "@/components/Load.vue";
import HeadSearch from "@/components/HeadSearch.vue";
import Search from "@/components/Search.vue";
import Map from "@/components/Map.vue";
import Form from "@/components/Form.vue";
import Navigation from "@/components/Navigation.vue";

export default {
  name: "Home",
  mixins: [Mixin],
  components: {
    Load,
    HeadSearch,
    Search,
    Map,
    Navigation,
    Form,
  },
  data() {
    return {
      lat: 0,
      lng: 0,
      searchFlag: false,
      getSearchFlag: false,
    };
  },
  mounted() {
    setTimeout(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          function(position) {
            this.lat = position.coords.latitude;
            this.lng = position.coords.longitude;
          }.bind(this)
        );
      }
    }, 1000);
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";
.index {
  > .form {
    transform: translateY(-24px);
  }
}
.loadFadeOut-leave-active,
.loadFadeOut-enter-active {
  transition: opacity 0.5s;
}
.loadFadeOut-enter,
.loadFadeOut-leave-to {
  opacity: 0;
}
</style>
