<template>
  <div class="the-footer">
    <div class="the-footer__container">
      <ul class="the-footer__menu">
        <li v-for="(menu, idx) in menuItem" :key="idx" class="the-footer__item">
          <nuxt-link :to="menu.link">
            {{ menu.name }}
          </nuxt-link>
        </li>
      </ul>
      <div class="the-footer__sns">
        <ListSns class="the-footer__sns-list" />
        <div class="the-footer__page-top" @click="clickPageTop()">
          <img src="~/assets/img/icon/icon-arrow.svg" draggable="false" alt="Top">
        </div>
      </div>
      <p class="copyright">
        Copyright &copy; 2020 DEREN
      </p>
    </div>
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
    clickPageTop () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      this.$emit('clickPageTop');
    }
  }

});
</script>

<style lang="scss" scoped>
.the-footer {
  width: 100%;
  padding: 60px 0 30px;
  background: $COLOR_FOOTER;

  &__container {
    width: $CONTAINER_WIDTH;
    margin: auto;
  }

  &__sns {
    position: relative;
    display: flex;
    justify-content: center;
    margin-top: 60px;
  }

  &__page-top {
    position: absolute;
    top: 0;
    right: 0;
    width: 68px;
    cursor: pointer;

    img {
      border: none;
    }
  }

  &__menu {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0;
  }

  &__item {
    margin: 5px 10px;
    list-style: none;
    @include text(normal, 400);
  }
}

.copyright {
  margin: 60px 0 0;
  text-align: center;
  color: $COLOR_LINK;
}

@media screen and (max-width: $BREAKPOINT_MD) {
  .the-footer {
    padding: 30px 15px;
    &__container {
      width: 100%;
    }
  }
}

@media screen and (max-width: $BREAKPOINT_SM) {
  .the-footer {
    &__container {
    }

    &__menu {
      flex-wrap: wrap;
      padding: 5px 0
    }

    &__sns {
      display: block;
      margin-top: 30px;
    }

    &__sns-list {
      display: flex;
      justify-content: center;
      padding: 0;
    }

    &__page-top {
      position: relative;
      width: 30px;
      margin-left: auto;
    }
  }

  .copyright {
    margin: 10px 0 0;
    text-align: center;
  }
}

</style>
