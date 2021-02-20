<template>
  <div class="skeleton-screen" />
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({});
</script>

<style lang="scss" scoped>
.skeleton-screen {
  width: 100%;
  height: 100%;
  background: #d9d9d9;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    display: block;
    height: 100%;
    width: 100%;
    background:  linear-gradient(90deg, transparent, rgba(#fff, 0.5), transparent);
    position: absolute;
    top: 0;
    left: 0;
    animation: skeleton-animation 1.2s linear infinite;
  }
}

@media screen and (max-width: $BREAKPOINT_SP) {
  .skeleton-screen {
      height: auto;
  }
}

@keyframes skeleton-animation {
  0% {
    transform: translateX(-100%)
  }
  100% {
    transform: translateX(100%)
  }
}
</style>
