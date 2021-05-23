<template>
  <div class="theme-color">
    <span class="theme-color__item" :class="{'theme-color__item--active': color === 'DEFAULT'}" style="background: #1a1919" @click="clickTheme('DEFAULT')" />
    <span class="theme-color__item" :class="{'theme-color__item--active': color === 'LIGHT_BLUE'}" style="background: #7FC2C2" @click="clickTheme('LIGHT_BLUE')" />
    <span class="theme-color__item" :class="{'theme-color__item--active': color === 'PINK'}" style="background: #F39E7A" @click="clickTheme('PINK')" />
    <span class="theme-color__item" :class="{'theme-color__item--active': color === 'GREEN'}" style="background: #C8EA7E" @click="clickTheme('GREEN')" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    color: {
      type: String,
      required: false,
      default: 'DEFAULT'
    }
  },

  methods: {
    clickTheme (color: string) {
      this.$emit('color', color);
    }
  }

});
</script>

<style lang="scss" scoped>
@mixin container() {
  position: relative;
  width: $CONTAINER_WIDTH;
  margin: auto;

  @media screen and (max-width: $BREAKPOINT_MD) {
    width: 100%;
  }

  @media screen and (max-width: $BREAKPOINT_SM) {
    padding: 30px 0 0;
  }
}

.theme-color {
  @include container();
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 30px 0;

  &__item {
    display: block;
    width: 30px;
    height: 30px;
    background: #FFF;
    border: 2px solid #FFF;
    cursor: pointer;
    margin-right: 10px;
    opacity: 0.6;
    &--active {
      opacity: 1;
    }
  }
}
</style>
