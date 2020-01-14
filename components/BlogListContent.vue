<template>
  <div class="blog-list-content">
    <p>{{ contribution }}contribution ({{ date[0] }}/{{ date[1] }}/{{ date[2] }}現在)</p>
    <div v-for="(article, index) in articleList" :key="index">
      <ul class="blog-list">
        <li class="blog-list__item">
          <a :href="article.url" target="_blank">{{ article.title }}</a>
        </li>
      </ul>
    </div>
    <p class="blog-other">
      >>>
      <a href="https://qiita.com/deren2525" target="_blank">記事一覧</a>
    </p>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class WorkList extends Vue {
  @Prop({ default: {} }) articleList!: any;
  @Prop({ default: 0 }) contribution!: number;
  @Prop({ default: [] }) date!: [number, number, number];
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/variables";

.blog-list {
  display: inline-block;

  @include text(small, regular);

  &__item {
    position: relative;
    margin: 0;
    padding-bottom: 5px;
    color: $COLOR_BLACK;

    &::before {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 0;
      height: 1px;
      background: $COLOR_BLACK;
      transition: 0.8s;
    }

    &:hover {
      &::before {
        width: 100%;
        transition: 0.8s;
      }

      a {
        color: $COLOR_BLACK;
        transition: 0.8s;
      }
    }
  }
}

.blog-other {
  position: relative;
  display: inline-block;
  margin: 0;
  padding-bottom: 5px;
  color: $COLOR_BLACK;

  @include text(small, regular);

  &::before {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 0;
    height: 1px;
    background: $COLOR_BLACK;
    transition: 0.8s;
  }

  &:hover {
    &::before {
      width: 100%;
      transition: 0.8s;
    }
  }
}
</style>
