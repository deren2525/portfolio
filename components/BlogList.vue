<template>
  <div class="blog-list">
    <p>
      {{ totalContribution }}contribution ( {{ today }} 現在)
    </p>
    <template v-if="items.length !== 0">
      <div v-for="(article, index) in articles" :key="index">
        <ul class="blog-list__list">
          <li class="blog-list__item">
            <a :href="article.url" target="_blank">{{ article.title }}（{{ article.likeCount }}）</a>
          </li>
        </ul>
      </div>
      <p class="blog-other">
        >>>
        <a href="https://qiita.com/deren2525" target="_blank">記事一覧</a>
      </p>
    </template>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import dayjs from 'dayjs';
import { IBlog } from '~/types/blog';

type Data = {
  articles: IBlog[];
}

export default Vue.extend({
  props: {
    items: {
      type: Array as PropType<IBlog[]>,
      required: false,
      default: () => []
    }
  },

  data (): Data {
    return {
      articles: []
    };
  },
  computed: {
    totalContribution (): number {
      if (this.items.length === 0) { return 0; }
      let totalContribution = 0;
      this.items.forEach((item: IBlog) => {
        totalContribution += item.likeCount;
      });
      return totalContribution;
    },
    today (): string {
      return dayjs().format('YYYY年MM月DD日');
    }
  },

  watch: {
    items: {
      handler () {
        this.articles = this.items.slice(0, 4);
      },
      deep: true
    }
  },

  created () {
    this.articles = this.items.slice(0, 4);
  }
});
</script>

<style lang="scss" scoped>
.blog-list {
  &__list {
    display: inline-block;
    padding-left: 15px;
    list-style: none;
    @include text(small, regular);
  }

  &__item {
    position: relative;
    margin: 0;
    padding-bottom: 5px;
    box-sizing: border-box;
    &::before {
      position: absolute;
      top: calc(1.6rem / 2);
      left: -15px;
      width: 3px;
      height: 3px;
      border-radius: 50%;
      background: $COLOR_LINK;
    }
    a {
      @include link-border;
    }
  }
}

.blog-other {
  position: relative;
  display: inline-block;
  margin: 20px 0 30px 0;
  padding: 0 0 5px 0;
  @include text(small, regular);
  @include link-border;
}

@media screen and (max-width: $BREAKPOINT_SP) {
.blog-list {
  margin-bottom: 30px;
  p {
    margin-left: 15px;
  }

  &__list {
    padding-left: 30px;
    margin: 0 0 10px 0;
    line-height: 2rem;
  }

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
