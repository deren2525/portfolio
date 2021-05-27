<template>
  <div class="default">
    <TheHeader
      :menu-item="menuItem"
      @click="clickMenu(true)"
    />
    <div
      class="overlay"
      :class="{'open': isMenuOpen}"
      @click="clickMenu(false)"
    />
    <TheMenu
      v-scroll-lock="isMenuOpen"
      :menu-item="menuItem"
      class="the-menu"
      :class="{'open': isMenuOpen}"
      @close="clickMenu(false)"
    />
    <nuxt />
    <TheFooter :menu-item="menuItem" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { IMenu } from '~/types/utility/menu';

type Data = {
  menuItem: IMenu[];
  isMenuOpen: boolean;
}

export default Vue.extend({
  data (): Data {
    return {
      menuItem: [
        {
          name: 'HOME',
          link: '/'
        },
        {
          name: 'WORKS',
          link: '/work'
        }
      ],
      isMenuOpen: false
    };
  },

  methods: {
    clickMenu (v: boolean) {
      this.isMenuOpen = v;
    }
  }
});
</script>

<style lang="scss">
.default {
  position: relative;
  overflow-x: hidden;
}

.footer {
  height: 280px;
  margin-left: 120px;
  padding: 50px 0;
  box-sizing: border-box;
  color: $COLOR_TEXT_WHITE;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  visibility: hidden;
  opacity: 0;
  transition: .3s;
  background: $COLOR_OVERLAY;
  z-index: $MENU_OVERLAY_INDEX;

  &.open {
    visibility: visible;
    opacity: .6;
  }
}

.the-menu {
  position: fixed;
  top: 0;
  right: -100%;
  z-index: $MENU_INDEX;
  transition: 0.3s;

  &.open {
    transition: 0.3s;
    right: 0;
  }
}

@media screen and (max-width: $BREAKPOINT_MD) {
  .footer {
    align-items: center;
    margin-left: 0;
    padding: 0;
    line-height: 6rem;
    height: auto;

    .copyright {
      padding-bottom: 30px;
      margin: 0 0 0 30px;
    }
  }
}
</style>
