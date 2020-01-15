<template>
  <div class="sns-list-content">
    <ul class="sns-list">
      <div class="sns-list__list" v-for="(sns, index) in snsList" :key="index">
        <li class="sns-list__item">
          <p class="sns-list__link">
            <a :href="sns.url" target="_blank">{{ sns.name }}</a>
          </p>
        </li>
      </div>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class WorkList extends Vue {
  @Prop({ default: {} }) snsList!: { name: string; url: string };
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/variables";

.sns-list {
  @include text(small, regular);

  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;

  &__item {
    width: 80px;
    margin: 10px;
    text-align: center;
  }

  &__link {
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

@media screen and (max-width: $BREAKPOINT_SP) {
  .sns-list {
    flex-wrap: wrap;
    padding-bottom: 60px;
    margin-bottom: 0;

    &__item {
      margin: 10px;
      width: auto;
    }

    &__title {
      margin: 0;
    }
  }
}
</style>
