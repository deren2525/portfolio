<template>
  <div class="blog-list-content">
    <p>
      {{ contribution }}contribution ({{ date[0] }}/{{ date[1] }}/{{
      date[2]
      }}現在)
    </p>
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
  @Prop() private articleList!: any;
  @Prop() private contribution!: number;
  @Prop() private date!: number[];
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/variables";

.blog-list {
  display: inline-block;
  padding-left: 15px;
  list-style: none;
  @include text(small, regular);

  &__item {
    position: relative;
    margin: 0;
    padding-bottom: 5px;
    color: $COLOR_BLACK;
    border-bottom: 2px solid $COLOR_LINK_BD;
    box-sizing: border-box;
    @include link-border;
    &::before {
      position: absolute;
      top: calc(1.6rem / 2);
      left: -15px;
      width: 3px;
      height: 3px;
      background: $COLOR_BLACK;
      border-radius: 50%;
    }
    &::after {
      bottom: -2px;
    }
  }
}

.blog-other {
  position: relative;
  display: inline-block;
  margin: 20px 0 30px 0;
  padding: 0 0 5px 0;
  color: $COLOR_BLACK;
  @include text(small, regular);
  @include link-border;
}

@media screen and (max-width: $BREAKPOINT_SP) {
  .blog-list-content {
    margin-bottom: 30px;
    p {
      margin-left: 15px;
    }
  }

  .blog-list {
    padding-left: 30px;
    margin: 0 0 10px 0;
    line-height: 2rem;
    &__item {
      margin: 0 0 10px 0;
    }
  }

  .blog-other {
    padding: 0 0 5px 0;
    margin: 15px 0 60px 0;
  }
}
</style>
