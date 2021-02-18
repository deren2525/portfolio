<template>
  <div class="sns-list">
    <div class="sns-list__item">
      <p class="sns-list__icon">
        <a href="https://twitter.com/study_dedede" target="_blank">
          <img src="~/assets/img/icon/icon-twitter.svg" draggable="false" alt="Twitter">
        </a>
      </p>
      <div class="tooltip">
        Twitter
      </div>
    </div>
    <div class="sns-list__item">
      <p class="sns-list__icon">
        <a href="https://codepen.io/deren2525/" target="_blank">
          <img src="~/assets/img/icon/icon-codepen.svg" draggable="false" alt="CodePen">
        </a>
      </p>
      <div class="tooltip">
        CodePen
      </div>
    </div>
    <div class="sns-list__item">
      <p class="sns-list__icon">
        <a href="https://github.com/deren2525" target="_blank">
          <img src="~/assets/img/icon/icon-github.svg" draggable="false" alt="GitHub">
        </a>
      </p>
      <div class="tooltip">
        GitHub
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>

<style lang="scss" scoped>
$tooltip-width: 100px;

.tooltip {
  position: absolute;
  left: -35px;
  top: -55px;
  width: $tooltip-width;
  padding: 12px 10px;
  background: $COLOR_BLACK;
  color: $COLOR_TEXT_WHITE;
  text-align: center;
  box-sizing: border-box;
  border-radius: 4px;
  opacity: 0;
  cursor: initial;
  transition: 0.8s;
  @include text(small, regular);
  &::before {
    content: "";
    position: absolute;
    bottom: -8px;
    left: calc(#{$tooltip-width} / 2 - 8px);
    border-top: 10px solid $COLOR_BLACK;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
  }
}

.sns-list {
  display: flex;
  justify-content: flex-start;
  list-style: none;
  padding: 0;
  @include text(small, regular);
  &__item {
    position: relative;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin: 0 20px 0 0;
    &:hover {
      transition: 0.8s;
      .tooltip {
        opacity: 1;
        transition: 0.8s;
      }
    }
  }
  &__icon {
    position: relative;
    width: 30px;
    height: 30px;
    margin: 0;
    a {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: none;
      }
    }
  }
}

@media screen and (max-width: $BREAKPOINT_SP) {
  .sns-list {
    padding: 20px 0 10px;
    margin: 0 0 0 30px;
    &__item {
      margin: 10px 20px 10px 0;
      width: auto;
    }
    &__title {
      margin: 0;
    }
    .tooltip {
      display: none;
    }
  }
}
</style>
