<template lang="pug">
nav.nav
	ul.nav__list
		li(v-for="(item, i) in navLink", :key="item.id", :class="{navActive:active == item.to}")
			router-link(:to="{name:`${item.to}`}").nav__list--item
				svg(version="1.1", xmlns="http://www.w3.org/2000/svg", xmlns:xlink="http://www.w3.org/1999/xlink", viewBox="0 0 512 512", xml:space="preserve")
					g(v-html="item.icon")
				p.nav__list--item--txt {{item.ttl}}
		li(v-for="(item, i) in navItem", :key="item.id").nav__list--item
			svg(version="1.1", xmlns="http://www.w3.org/2000/svg", xmlns:xlink="http://www.w3.org/1999/xlink", viewBox="0 0 512 512", xml:space="preserve")
				g(v-html="item.icon")
			p.nav__list--item--txt {{item.ttl}}
</template>

<script>
/* eslint-disable */
import Mixin from "@/mixins/Mixin.vue";

export default {
  name: "Navigation",
  mixins: [Mixin],
  props: ["active"],
  data() {
    return {
      navLink: [
        {
          id: 0,
          ttl: "ホーム",
          icon: `<path class="nav__list--item--path" d="M62.2,62.2C103.6,20.8,158.1,0,212.4,0c54.2,0,108.8,20.8,150.2,62.2c41.4,41.4,62.2,96,62.2,150.1c0,37.9-10.4,75.8-30.5,109.4L497,424.5c20,20,20,52.5,0,72.5c-20,20-52.5,20-72.5,0L321.7,394.1c-33.6,20.2-71.5,30.6-109.3,30.5c-54.2,0-108.8-20.8-150.2-62.2C20.8,321.1,0,266.6,0,212.3C-0.1,158.1,20.8,103.6,62.2,62.2z M120.2,304.5c25.5,25.5,58.7,38.1,92.2,38.2c33.5-0.1,66.6-12.7,92.2-38.2c25.5-25.6,38.1-58.7,38.2-92.2c-0.1-33.5-12.7-66.6-38.2-92.2C279,94.6,245.9,82,212.4,82c-33.5,0.1-66.6,12.7-92.2,38.2C94.6,145.7,82,178.9,82,212.3C82,245.9,94.6,279,120.2,304.5z"/>`,
          onIcon: `<path class="nav__list--item--path" d="M497,424.5L394.3,321.7c20.1-33.6,30.5-71.5,30.5-109.4c0-54.1-20.8-108.7-62.2-150.1C321.2,20.8,266.6,0,212.4,0C158.1,0,103.6,20.8,62.2,62.2C20.8,103.6-0.1,158.1,0,212.3c0,54.3,20.8,108.8,62.2,150.1c41.4,41.4,96,62.2,150.2,62.2c37.8,0.1,75.7-10.3,109.3-30.5L424.5,497c20,20,52.5,20,72.5,0S517,444.5,497,424.5z"/>`,
          to: "Home",
          flag: false,
        },
        {
          id: 1,
          ttl: "お気に入り",
          icon: `<path class="nav__list--item--path" d="M256,480.1c-7.9,0-15.8-3-21.8-9L42.5,279.4C15.1,252,0,215.6,0,176.8c0-38.7,15.1-75.1,42.5-102.5C69.8,46.9,106.2,31.9,145,31.9c38.7,0,75.1,15.1,102.5,42.5c3,3,5.8,6.1,8.5,9.3c2.7-3.2,5.5-6.3,8.5-9.3c27.4-27.4,63.8-42.5,102.5-42.5c38.7,0,75.1,15.1,102.5,42.5c27.4,27.4,42.5,63.8,42.5,102.5c0,38.7-15.1,75.1-42.5,102.5L277.8,471.1C271.7,477.1,263.9,480.1,256,480.1z M145,93.4c-22.3,0-43.2,8.7-59,24.4c-15.8,15.8-24.4,36.7-24.4,59c0,22.3,8.7,43.2,24.4,59l170,170l170-170c15.8-15.7,24.4-36.7,24.4-59c0-22.3-8.7-43.2-24.4-59c0,0,0,0,0,0c-15.8-15.8-36.7-24.4-59-24.4c-22.3,0-43.2,8.7-59,24.4c-10.9,10.9-18.5,24.5-22.1,39.4c-3.3,13.8-15.7,23.6-29.9,23.6c0,0,0,0,0,0c-14.2,0-26.6-9.8-29.9-23.6c-3.6-14.9-11.2-28.5-22.1-39.4C188.2,102.1,167.3,93.4,145,93.4z"/>`,
          onIcon: `<path class="nav__list--item--path" d="M469.5,74.4a144.85,144.85,0,0,0-205,0c-3,3-5.8,6.1-8.5,9.3-2.7-3.2-5.5-6.3-8.5-9.3a145,145,0,1,0-205,205L234.2,471.1a30.9,30.9,0,0,0,43.6,0L469.5,279.4a144.85,144.85,0,0,0,0-205Z" transform="translate(0 -31.9)"/>`,
          to: "Favorite",
          flag: false,
        },
      ],
      navItem: [
        {
          id: 2,
          ttl: "予約履歴",
          icon: `<path class="nav__list--item--path" d="M149.192,103.525c15.995,0,28.964-12.97,28.964-28.973V28.964C178.157,12.97,165.187,0,149.192,0C133.19,0,120.22,12.97,120.22,28.964v45.588C120.22,90.556,133.19,103.525,149.192,103.525z"></path><path class="nav__list--item--path" d="M362.815,103.525c15.994,0,28.964-12.97,28.964-28.973V28.964C391.78,12.97,378.809,0,362.815,0c-16.003,0-28.973,12.97-28.973,28.964v45.588C333.843,90.556,346.812,103.525,362.815,103.525z"></path><path class="nav__list--item--path" d="M435.164,41.287h-17.925v33.265c0,30.018-24.415,54.432-54.423,54.432c-30.017,0-54.432-24.414-54.432-54.432V41.287H203.615v33.265c0,30.018-24.414,54.432-54.423,54.432c-30.017,0-54.431-24.414-54.431-54.432V41.287H76.836c-38.528,0-69.763,31.235-69.763,69.763v331.187C7.073,480.765,38.308,512,76.836,512h358.328c38.528,0,69.763-31.235,69.763-69.763V111.05C504.927,72.522,473.691,41.287,435.164,41.287z M450.023,429.988c0,17.826-14.502,32.329-32.328,32.329H94.305c-17.825,0-32.328-14.503-32.328-32.329V170.876h388.046V429.988z"></path>`,
          flag: false,
        },
        {
          id: 3,
          ttl: "マイページ",
          icon: `<path class="nav__list--item--path" d="M485.1,504.2H26.9c-7.3,0-14.4-3-19.4-8.3c-5.1-5.3-7.7-12.5-7.4-19.8c0.9-18.1,3.6-36,8.3-53.3c11.9-44.7,37.5-84.2,73.9-114.3c18.3-15.2,39.1-27.8,61.7-37.5c-6.7-6.5-12.8-13.7-18.3-21.4C107,223.6,97.3,193,97.3,161C97.3,76.5,166,7.8,250.5,7.8C335,7.8,403.8,76.5,403.8,161c0,31.2-9.3,61.2-26.9,86.8c-4.9,7.2-10.4,13.9-16.4,20c24.1,9.5,46.4,22.3,66.1,38c38.2,30.5,64.8,70.9,77.1,117c4.6,17.2,7.4,35.1,8.3,53.2c0.4,7.3-2.3,14.5-7.4,19.8C499.5,501.2,492.5,504.2,485.1,504.2z M57,450.5h398c-0.9-4.7-1.9-9.3-3.2-13.8c-9.3-34.9-29.6-65.6-58.8-88.9c-27.6-22-62.1-36.9-99.7-43c-11.9-1.9-21.1-11.6-22.4-23.5c-1.3-12,5.5-23.4,16.7-27.9c37.9-15.2,62.4-51.5,62.4-92.4c0-54.9-44.7-99.5-99.6-99.5c-54.9,0-99.5,44.7-99.5,99.5c0,41.5,26.2,79.1,65.1,93.4c11.3,4.2,18.5,15.4,17.5,27.4c-1,12-9.8,21.9-21.7,24.2c-36.2,7-69.2,22.2-95.5,43.9c-28.1,23.3-47,52.5-56.2,86.8C59,441.3,57.9,445.9,57,450.5z"/>`,
          flag: false,
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/common.scss";
.nav {
  width: 100vw;
  height: 80px;
  background: $white;
  padding: 10px 0 0;
  border-top: 1px solid $lightGray;
  position: fixed;
  inset: auto 0 0 auto;
  z-index: 10;
  &__list {
    display: flex;
    justify-content: center;
    gap: 12%;
    &--item {
      display: flex;
      align-items: center;
      flex-direction: column;
      &--txt {
        color: $gray;
        font-size: 1rem;
        font-weight: bold;
        line-height: 1rem;
        margin: 6px 0 0;
      }
      svg {
        width: 26px;
        height: 26px;
        opacity: 1;
      }
      &--path {
        fill: $gray;
      }
    }
  }
}
.navActive {
  p {
    color: $carrot;
  }
  path {
    fill: $carrot;
  }
}
</style>
