<template>
  <ul class="work-list">
    <li class="work-list__list" v-for="(item, index) in workItems" :key="index">
      <a :href="item.url" target="_blank">
        <div class="work-list__item">
          <div class="overlay">
            <p class="pc-only">{{ item.title }}</p>
          </div>
          <p class="work-list__img">
            <img :src="require(`~/assets/img/works/${item.img}`)" />
          </p>
        </div>
      </a>
      <p class="work-list__title sp-only">{{ item.title }}</p>
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class WorkList extends Vue {
  @Prop({ default: {} }) workItems!: {
    title: string;
    src: string;
    url: string;
  };
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/variables";

.overlay {
  position: absolute;
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
    margin-right: 3%;
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
    position: relative;
    width: 300px;
    height: 215px;
    background: #eee;
    padding: 0;
    list-style: none;
  }

  &__img {
    width: 100%;
    height: 100%;
    margin: 0;
  }

  &__title {
    line-height: 6rem;
    margin: 0 0 0 15px;
  }
}

@media screen and (max-width: $BREAKPOINT_SP) {
  .work-list {
    &__list {
      margin: 0 0 10px 0;
    }

    &__item {
      width: 100%;
      height: auto;
    }
  }
}
</style>
