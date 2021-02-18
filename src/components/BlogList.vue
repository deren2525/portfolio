<template>
  <div class="blog-list">
    {{ totalContribution }}contribution ( {{ todayDate }} 現在)
    <ul v-if="articles.length !== 0" class="blog-list__list" >
      <li v-for="(article, index) in articles" :key="index" class="blog-list__item">
        <a :href="article.url" target="_blank">{{ article.title }}（{{ article.likeCount }}）</a>
      </li>
    </ul>
    <p class="blog-other">
      >>>
      <a href="https://qiita.com/deren2525" target="_blank">記事一覧</a>
    </p>
</div>
</template>

<script lang="ts">
import { defineComponent, computed, toRefs, reactive, PropType } from 'vue';
import moment from 'moment';
import { IBlog } from '@/types/blog';

interface State {
  todayDate: string,
}

export default defineComponent({
  props: {
    items: {
      type: Array as PropType<IBlog[]>,
      required: true,
    },
  },

  setup(props, context) {
    const state = reactive<State>({
      todayDate: moment().format('YYYY年MM月DD日')
    });

    const articles = computed(() => {
      return props.items.slice(0, 4);
    });

    const totalContribution = computed(() => {
      if (props.items.length === 0) { return 0; }
      let totalContribution = 0;
      props.items.forEach((item: IBlog) => {
        totalContribution += item.likeCount;
      });
      return totalContribution;
    });

    return {
      ...toRefs(state),
      articles,
      totalContribution
    };
  }
});
</script>

<style lang="scss" scoped>
@import '../scss/base.scss';

.blog-list {
  color: $COLOR_TEXT;
  @include text(small, regular);

  &__list {
    display: inline-block;
    padding-left: 15px;
    list-style: none;
    @include text(small, regular);
  }

  &__item {
    position: relative;
    margin: 0 0 15px 0;
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
