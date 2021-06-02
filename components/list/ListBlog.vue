<template>
  <div class="list-blog">
    <p>
      {{ totalContribution }}contribution ( {{ today }} 現在)
    </p>
    <template v-if="items.length !== 0">
      <ul class="list-blog__list">
        <li v-for="(article, index) in articles" :key="index" class="list-blog__item">
          <a :href="article.url" target="_blank">
            <p class="list-blog__day">{{ formatDay(article.day) }} {{ article.likeCount }}contribution</p>
            <p class="list-blog__title">{{ article.title }}</p>
          </a>
        </li>
      </ul>
      <p class="view-all">
        <a href="https://qiita.com/deren2525" target="_blank">View All</a>
      </p>
    </template>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

import dayjs from 'dayjs';
import { formattedDay } from '~/utils/format';

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
      return dayjs().format('YYYY/MM/DD');
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
  },

  methods: {
    formatDay (day: string): string {
      return formattedDay(day);
    }
  }
});
</script>

<style lang="scss" scoped>
.list-blog {
  &__list {
    display: block;
    padding: 0;
    margin: 0;
    list-style: none;
    @include text(small, 400);
  }

  &__item {
    position: relative;
    margin: 0;
    box-sizing: border-box;
    a {
      position: relative;
      display: block;
      padding: 19px 0 18px;
      z-index: auto;

      &::before {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        display: block;
        width: 100%;
        height: 1px;
        background: $COLOR_GRAY;
      }
      &::after {
        display: block;
        opacity: 0;
        transition: opacity .3s;
      }

      &:hover {
        &::before {
          content: none;
        }
        &::after {
          position: absolute;
          top: -1px;
          left: -32px;
          right: -32px;
          bottom: 0;
          border-top: 1px solid $COLOR_WHITE;
          box-shadow: 0 0 10px 0 rgba(200, 200, 200, .3%);
          opacity: 1;
        }
      }
    }
  }

  &__title {
    color: $COLOR_TEXT_BLACK;
  }

  &__day {
    color: $COLOR_TEXT_BLACK;
  }
}

.blog-other {
  position: relative;
  display: inline-block;
  margin: 20px 0 30px 0;
  padding: 0 0 5px 0;
  @include text(small, 400);
  @include link-border;
}

.view-all {
  display: flex;
  justify-content: flex-end;
  width: 150px;
  margin: 60px 0 0 auto;
  color: $COLOR_TEXT_BLACK;
  text-align: center;
  @include text(large, 400);
  a {
    width: 100%;
    display: inline-block;
    padding: 10px 0;
    color: $COLOR_TEXT_BLACK;
    text-decoration: none;
    border-bottom: 1px solid $COLOR_TEXT_BLACK;
    &:focus,
    &:link,
    &:active,
    &:visited {
      color: $COLOR_TEXT_BLACK;
    }
  }
}

@media screen and (max-width: $BREAKPOINT_SM) {
.list-blog {
  &__title {
    margin: 0;
  }

  &__day {
    margin: 0;
  }

  &__list {
    line-height: 2rem;
  }

  &__item {
  }

  .view-all {
    justify-content: center;
    margin: 30px 0 0;
  }
}
}
</style>
