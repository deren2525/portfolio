<template>
  <ul class="work-list">
    <template v-if="items.length !== 0">
      <li v-for="item in items" :key="item.id" class="work-list__list">
        <a :href="item.url" target="_blank">
          <div class="work-list__item">
            <div class="overlay">
              <p class="work-list__title pc-only">{{ item.name }}</p>
            </div>
            <p class="work-list__img">
              <img
                :src="item.imgSrc"
                :alt="item.name"
                draggable="false"
              >
            </p>
          </div>
        </a>
        <p class="work-list__title sp-only">
          ▲ {{ item.name }}
        </p>
      </li>
    </template>
  </ul>
</template>

<script lang="ts">
import Vue, { PropType } from 'vue';
import { IWork } from '~/types/work';

export default Vue.extend({
  props: {
    items: {
      type: Array as PropType<IWork[]>,
      required: false,
      default: () => []
    }
  }
});
</script>

<style lang="scss" scoped>
.overlay {
  position: absolute;
  width: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: $COLOR_OVERLAY;
  transition: 0.8s;
  overflow: hidden;
}

.work-list {
  $base: &;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
  user-select: none;
  &__list {
    margin-right: 2%;
    margin-bottom: 60px;
    transition: 0.8s;
    cursor: pointer;
    &:last-of-type {
      margin: 0;
    }
    &:hover {
      .overlay {
        width: 100%;
      }
    }
    img {
      object-fit: cover;
    }
  }

  &__title {
    color: $COLOR_OVERLAY_TEXT;
    @include text(small, bold);
    &.pc-only {
      white-space: nowrap;
    }
    &.sp-only {
      line-height: 6rem;
      margin: 0 0 0 15px;
      color: $COLOR_TEXT;
    }
  }

  &__item {
    position: relative;
    width: 300px;
    height: 215px;
    background: #eee;
    padding: 0;
    list-style: none;
  }
  &__img {
    width: 100%;
    height: 100%;
    margin: 0;
    line-height: 0;
  }
}

@media screen and (max-width: $BREAKPOINT_SP) {
  .work-list {
    &__list {
      margin: 0 0 10px 0;
    }
    &__item {
      width: 100%;
      height: auto;
    }
  }
  .overlay {
    display: none;
  }
}
</style>
