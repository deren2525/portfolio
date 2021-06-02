<template>
  <div class="list-activities">
    <template v-if="items.length !== 0">
      <ul class="list-activities__list">
        <li v-for="activity in activities" :key="activity.id" class="list-activities__item">
          <a :href="activity.url" target="_blank">
            <p class="list-activities__day">{{ activity.day }} {{ activity.urlTitle }} </p>
            <p class="list-activities__title">{{ activity.title }}</p>
          </a>
        </li>
      </ul>
      <!-- <p class="view-all">
        <a href="https://qiita.com/deren2525" target="_blank">View All</a>
      </p> -->
    </template>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';

import dayjs from 'dayjs';
import { formattedDay } from '~/utils/format';

import { IActivity } from '~/types/activity';

type Data = {
  activities: IActivity[];
}

export default Vue.extend({
  props: {
    items: {
      type: Array as PropType<IActivity[]>,
      required: false,
      default: () => []
    }
  },

  data (): Data {
    return {
      activities: []
    };
  },

  watch: {
    items: {
      handler () {
        this.activities = this.items.slice(0, 4);
      },
      deep: true
    }
  },

  created () {
    this.activities = this.items.slice(0, 4);
  },

  methods: {
    formatDay (day: string): string {
      return formattedDay(day);
    }
  }
});
</script>

<style lang="scss" scoped>
.list-activities {
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
          left: -10px;
          right: -10px;
          bottom: 0;
          border-top: 1px solid $COLOR_BLACK;
          box-shadow: 0 0 10px 0 rgba(100, 100, 100, .3%);
          opacity: 1;
        }
      }
    }
  }

  &__title {
    color: $COLOR_TEXT_WHITE;
  }

  &__day {
    color: $COLOR_TEXT_WHITE;
  }
}

.view-all {
  display: flex;
  justify-content: flex-end;
  margin: 60px 0 0;
  color: $COLOR_TEXT_WHITE;
  @include text(large, 400);
  a {
    display: inline-block;
    padding: 10px 0;
    color: $COLOR_TEXT_WHITE;
    text-decoration: none;
    border-bottom: 1px solid $COLOR_TEXT_WHITE;
    &:focus,
    &:link,
    &:active,
    &:visited {
      color: $COLOR_TEXT_WHITE;
    }
  }
}

@media screen and (max-width: $BREAKPOINT_SM) {
.list-activities {
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
