<template>
  <div class="menu-icon" @click="click()">
    D
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  methods: {
    click () {
      this.$emit('click');
    }
  }

});
</script>

<style lang="scss" scoped>
.menu-icon {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 120px;
  background: $COLOR_INITIAL_BG;
  color: $COLOR_INITIAL_TEXT;
  font-size: 4rem;
  font-weight: bold;
  cursor: pointer;
}

@media screen and (max-width: $BREAKPOINT_SP) {
  .menu-icon {
    width: 60px;
    height: 60px;
    @include text(large, bold);
  }
}
</style>
