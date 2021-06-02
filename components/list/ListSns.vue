<template>
  <div class="list-sns">
    <div class="list-sns__item">
      <p class="list-sns__icon">
        <a href="https://twitter.com/study_dedede" target="_blank">
          <img src="~/assets/img/icon/icon-twitter.svg" draggable="false" alt="Twitter">
        </a>
      </p>
    </div>
    <div class="list-sns__item">
      <p class="list-sns__icon">
        <a href="https://codepen.io/deren2525/" target="_blank">
          <img src="~/assets/img/icon/icon-codepen.svg" draggable="false" alt="CodePen">
        </a>
      </p>
    </div>
    <div class="list-sns__item">
      <p class="list-sns__icon">
        <a href="https://github.com/deren2525" target="_blank">
          <img src="~/assets/img/icon/icon-github.svg" draggable="false" alt="GitHub">
        </a>
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>

<style lang="scss" scoped>
$tooltip-width: 100px;

.list-sns {
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

@media screen and (max-width: $BREAKPOINT_MD) {
  .list-sns {
    padding: 20px 0 10px;
    margin: 0 0 0 30px;
    &__item {
      margin: 10px 20px 10px 0;
      width: auto;
    }
  }
}
</style>
