<template>
  <div class="the-menu" tabindex="0">
    <div class="the-menu__close" @click="close()" />

    <ul class="the-menu__menu">
      <li v-for="(menu, idx) in menuItem" :key="idx" class="the-menu__item">
        <nuxt-link :to="menu.link" @click.native="close()">
          {{ menu.name }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

import { IMenu } from '~/types/utility/menu';

export default Vue.extend({
  props: {
    menuItem: {
      type: Array as PropType<IMenu[]>,
      required: true
    }
  },

  methods: {
    close () {
      this.$emit('close');
    }
  }

});
</script>

<style lang="scss" scoped>
.the-menu {
  width: 50%;
  height: 100vh;
  background: $COLOR_MENU;
  pointer-events: auto;
  padding: 30px;
  transition: 0.3s;
  box-sizing: border-box;

  &__close{
    position: relative;
    display: block;
    width: 50px;
    height: 50px;
    margin-left: auto;
    cursor: pointer;

    &:before,&:after {
      position: absolute;
      top: calc(14% - 5px);
      left: 14%;
      display: block;
      width: 100%;
      height: 3px;
      background: $COLOR_BLACK;
      transform: rotate(45deg);
      transform-origin:0% 50%;
    }

    &:after {
      transform: rotate(-45deg);
      transform-origin:100% 50%;
      left: auto;
      right: 14%;
    }
  }

  &__menu {
    display: flex;
    flex-direction: column;
    height: 100%;
    padding: 0;
  }

  &__item {
    list-style: none;
    margin-bottom: 50px;

    a {
      padding: 10px 5px;
      display: block;
      text-transform: uppercase;
      transition: color .1s;
      @include text(normal, 400);
      color: $COLOR_MENU_TEXT;
    }
  }
}

</style>
