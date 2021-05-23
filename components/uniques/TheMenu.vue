<template>
  <div class="the-menu" tabindex="0">
    <div class="the-menu__close" @click="close()">
      ×
    </div>
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
  position: absolute;
  width: 90%;
  height: 100%;
  max-width: 500px;
  background: $COLOR_MENU;
  pointer-events: auto;
  padding: 30px;
  transition: 0.3s;

  &__close {
    width: 50px;
    height: 50px;
    line-height: 50px;
    margin-left: auto;
    font-size: 500%;
    color: $COLOR_MENU_TEXT;
    text-align: right;
    cursor: pointer;
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

@media screen and (max-width: $BREAKPOINT_MD) {
  .the-menu {
    max-width: 50%;
  }

}
</style>
