<template>
  <div class="activities-list-content">
    <ul class="activities-list">
      <li
        class="activities-list__item"
        v-for="(activity, index) in activitiesList"
        :key="index"
      >
        <p class="activities-list__title">{{ activity.title }}</p>
        <p class="activities-list__link">
          <a :href="activity.url" target="_blank"
            >>>> {{ activity.urlTitle }}</a
          >
        </p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class WorkList extends Vue {
  @Prop({ default: {} }) activitiesList!: {
    title: string;
    url: string;
    urlTitle: string;
  };
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/variables";

.activities-list {
  padding-left: 15px;

  &__title {
    @include text(small, regular);
  }

  &__item {
    margin: 0;
    color: $COLOR_BLACK;

    @include text(small, regular);
  }

  &__link {
    position: relative;
    display: inline-block;
    margin: 0;
    padding-bottom: 5px;

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
        color: #000;
        transition: 0.8s;
      }
    }
  }
}

@media screen and (max-width: $BREAKPOINT_SP) {
  .activities-list-content {
    margin-bottom: 60px;
  }

  .activities-list {
    padding-left: 30px;

    &__item {
      margin: 0 0 10px 0;
    }

    &__title {
      margin: 0;
    }
  }
}
</style>
