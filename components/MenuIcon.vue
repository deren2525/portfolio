<template>
  <div class="menu-icon" @click="$emit('click')">d</div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class MenuIcon extends Vue {}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/variables";

.menu-icon {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  background: $COLOR_BLACK;
  color: $COLOR_WHITE;
  font-size: 4rem;
  font-weight: bold;
  cursor: pointer;
}
</style>
