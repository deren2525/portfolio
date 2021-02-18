<template>
  <ul class="activities-list">
    <template v-if="items.length !== 0">
      <li v-for="(activity, index) in items" :key="index" class="activities-list__item">
        <a :href="activity.url" target="_blank">
          <p class="activities-list__title">{{ activity.title }}</p>
          <p class="activities-list__link">>>>> {{ activity.urlTitle }}</p>
        </a>
      </li>
    </template>
  </ul>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { IActivity } from '~/types/activity';

export default Vue.extend({
  props: {
    items: {
      type: Array as PropType<IActivity[]>,
      required: false,
      default: () => []
    }
  }
});
</script>

<style lang="scss" scoped>
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
