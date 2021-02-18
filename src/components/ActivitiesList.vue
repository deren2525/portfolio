<template>
  <ul v-if="items.length !== 0" class="activities-list">
    <li v-for="activity in items" :key="activity.id" class="activities-list__item">
      <a :href="activity.url" target="_blank">
        <p class="activities-list__title">{{ activity.title }}</p>
        <p class="activities-list__link">>>>> {{ activity.urlTitle }}</p>
      </a>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { IActivity } from '@/types/activity';

export default defineComponent({
  props: {
    items: {
      type: Array as PropType<IActivity[]>,
      required: true,
    },
  }
});
</script>

<style lang="scss" scoped>
@import '../scss/base.scss';

.activities-list {
  list-style: none;
  padding-left: 15px;

  &__title {
    @include text(small, regular);
  }

  &__item {
    position: relative;
    margin: 0;
    color: $COLOR_LINK;
    @include text(small, regular);
    &::before {
      position: absolute;
      top: calc(1.6rem / 2);
      left: -15px;
      width: 3px;
      height: 3px;
      background: $COLOR_LINK;
      color: $COLOR_LINK;
      border-radius: 50%;
    }
  }

  &__link {
    position: relative;
    display: inline-block;
    margin: 0;
    padding-bottom: 5px;
    @include link-border;
  }
}

@media screen and (max-width: $BREAKPOINT_SP) {
  .activities-list {
    padding: 0 0 60px 30px;

    &__item {
      margin: 0 0 15px 0;
    }

    &__title {
      margin: 0;
    }
  }
}
</style>
