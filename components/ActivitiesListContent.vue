<template>
  <div class="activities-list-content">
    <ul class="activities-list">
      <li class="activities-list__item" v-for="(activity, index) in activitiesList" :key="index">
        <a :href="activity.url" target="_blank">
          <p class="activities-list__title">{{ activity.title }}</p>
          <p class="activities-list__link">>>>> {{ activity.urlTitle }}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { IActivitiesList } from "../pages/index.vue";

@Component
export default class WorkList extends Vue {
  @Prop() private activitiesList!: IActivitiesList[];
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/variables";

.activities-list {
  list-style: none;
  padding-left: 15px;

  &__title {
    @include text(small, regular);
  }

  &__item {
    position: relative;
    margin: 0;
    color: $COLOR_BLACK;
    @include text(small, regular);
    &::before {
      position: absolute;
      top: calc(1.6rem / 2);
      left: -15px;
      width: 3px;
      height: 3px;
      background: $COLOR_BLACK;
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
  .activities-list-content {
    margin-bottom: 60px;
  }

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
