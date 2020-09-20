<template>
  <ul class="work-list">
    <template v-if="workItems.length !== 0">
      <li v-for="(item, index) in workItems" :key="index" class="work-list__list">
        <a :href="item.url" target="_blank">
          <div class="work-list__item">
            <div class="overlay">
              <p class="work-list__title pc-only">{{ item.title }}</p>
            </div>
            <p class="work-list__img">
              <img
                :src="require(`~/assets/img/works/${item.img}`)"
                :alt="item.title"
                draggable="false"
              >
            </p>
          </div>
        </a>
        <p class="work-list__title sp-only">
          ▲ {{ item.title }}
        </p>
      </li>
    </template>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    workItems: {
      type: Array,
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
  background: rgba($COLOR_BLACK, 0.8);
  transition: 0.8s;
  color: $COLOR_WHITE;
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
    &.pc-only {
      white-space: nowrap;
    }
    &.sp-only {
      line-height: 6rem;
      margin: 0 0 0 15px;
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
