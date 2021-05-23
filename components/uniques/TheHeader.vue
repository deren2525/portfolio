<template>
  <div class="the-header">
    <div class="the-header__container">
      <div class="the-header__logo">
        <nuxt-link to="/">
          DENEN no PORTFOLIO
        </nuxt-link>
      </div>

      <div class="the-header__right">
        <div class="the-header__sns">
          <ListSns />
        </div>

        <!-- Menu -->
        <div
          class="the-header__menu-icon"
          @click="clickMenu(isOpen)"
        >
          <span />
          <span />
          <span />
        </div>
        <div
          class="overlay"
          :class="{'open': isOpen}"
          @click="clickMenu(isOpen)"
        />
        <TheMenu
          :menu-item="menuItem"
          :is-open="isOpen"
          class="the-header__menu"
          :class="{'open': isOpen}"
          @close="clickMenu(isOpen)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

import { IMenu } from '~/types/utility/menu';

type Data = {
  isOpen :boolean;
}

export default Vue.extend({
  props: {
    menuItem: {
      type: Array as PropType<IMenu[]>,
      required: true
    }
  },

  data (): Data {
    return {
      isOpen: false
    };
  },

  methods: {
    clickMenu () {
      this.isOpen = !this.isOpen;
      document.body.style.overflowY = this.isOpen ? 'hidden' : 'auto';
    },
    click () {
      this.$emit('click');
    }
  }

});
</script>

<style lang="scss" scoped>
.the-header {
  width: 100%;
  height: 150px;
  background: $COLOR_HEADER;
  overflow: hidden;
  transition: 0.8s;

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: $CONTAINER_WIDTH;
    height: 100%;
    margin: auto;
  }

  &__logo {
    margin-right: auto;
    color: $COLOR_TEXT_WHITE;
    @include text(large, 400);
  }

  &__right {
    display: flex;
    margin-left: auto;
  }

  &__menu-icon {
    display: block;
    width: 60px;
    height: 30px;
    transform: translate(0, 0);
    transition: all .5s;
    cursor: pointer;
    z-index: 3;

    span {
      display: block;
      position: absolute;
      right: 0;
      width: 30px;
      height: 2px;
      background-color: $COLOR_LINK;
      transition: all .5s;

      &:nth-child(1) {
        top: 5px;
        width: 60px;
        animation: toggle01 7000ms infinite;
      }

      &:nth-child(2) {
        top: 15px;
        width: 30px;
        animation: toggle02 5000ms infinite;
        animation-delay: 0.33s;
      }

      &:nth-child(3) {
        top: 25px;
        width: 20px;
        animation: toggle02 5000ms infinite;
      }
    }
  }

  &__menu {
    position: absolute;
    top: 0;
    right: -100%;
    z-index: $MENU_INDEX;
    transition: 0.3s;

    &.open {
      transition: 0.3s;
      right: 0;
    }
  }
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

@keyframes toggle01 {
  0% { width: 70%; }
  10% { width: 50%; }
  20% { width: 100%; }
  30% { width: 10%; }
  40% { width: 50%; }
  50% { width: 70%; }
  60% { width: 50%; }
  70% { width: 10%; }
  80% { width: 100%; }
  90% { width: 10%; }
  100% { width: 70%; }
}
@keyframes toggle02 {
  0% { width: 30%; }
  10% { width: 20%; }
  20% { width: 40%; }
  30% { width: 10%; }
  40% { width: 20%; }
  50% { width: 30%; }
  60% { width: 20%; }
  70% { width: 10%; }
  80% { width: 40%; }
  90% { width: 10%; }
  100% { width: 30%; }
}
@media screen and (max-width: $BREAKPOINT_MD) {
  .the-header {
    &__container {
      width: 100%;
      padding: 0 15px;
    }

    &__sns {
      display: none;
    }

    &__menu-icon {
      span {
        right: 15px;
      }
    }
  }
}
</style>
