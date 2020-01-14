<template>
  <ul class="work-list">
    <li class="work-list__list" v-for="(item, index) in workItems" :key="index">
      <div class="work-list__item">
        <div class="overlay">
          <p>{{ item }}</p>
        </div>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class WorkList extends Vue {
  @Prop({ default: {} }) workItems!: Array<string>;
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/variables";

.overlay {
  width: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba($COLOR_BLACK, 0.8);
  transition: 0.8s;
  color: $COLOR_WHITE;
  overflow: hidden;
}

.work-list {
  $base: &;

  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;

  &__list {
    margin-right: 10%;
    margin-bottom: 60px;
    cursor: pointer;

    &:last-of-type {
      margin: 0;
    }

    &:hover {
      .overlay {
        width: 100%;
      }
    }
  }

  &__item {
    width: 240px;
    height: 240px;
    background: #eee;
    padding: 0;
    list-style: none;
  }
}
</style>
