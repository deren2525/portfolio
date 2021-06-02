<template>
  <ul class="list-work">
    <template v-if="isLoading">
      <li v-for="(item, idx) in Array(2)" :key="idx" class="list-work__list">
        <SkeletonScreen class="skeleton-screen" />
      </li>
    </template>
    <template v-else>
      <li
        v-for="item in items"
        :key="item.id"
        data-aos="fade-up"
        data-aos-duration="1000"
        class="list-work__list"
      >
        <a :href="item.url" target="_blank">
          <div class="list-work__img-wrapper">
            <div class="list-work__img">
              <img
                :src="item.imgSrc"
                :alt="item.name"
                draggable="false"
              >
              <span class="list-work__grad" />
            </div>
          </div>
          <div class="list-work__title">
            <p>No.{{ item.no }}</p>
            <p>{{ item.name }}</p>
          </div>
        </a>
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
    },
    isLoading: {
      type: Boolean,
      required: false,
      default: false
    }
  }
});
</script>

<style lang="scss" scoped>
.list-work {
  $base: &;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  padding: 0;
  margin: 0;
  user-select: none;
  &__list {
    position: relative;
    width: 45%;
    height: 100%;
    margin-right: auto;
    margin-bottom: 60px;
    transition: 0.8s;
    cursor: pointer;

    .skeleton-screen {
      position: relative;
      width: 28vw;
      height: 20vw;
      margin-left: auto;
      line-height: 0;
    }

    a {
      display: block;
      overflow: hidden;
      width: 28vw;
      height: 20vw;
      margin-left: 30px;
    }

    &:last-of-type {
      margin: 0;
    }

    &:nth-child(even) {
      margin-right: 0;
    }

    &:nth-of-type(2n) {
      margin-top: 150px;
    }

    &:hover {
      #{$base}__img {
        transform: scale(1.3);
        transition: 0.5s;
        &:after {
          opacity: .2;
          transition: 1s;
        }
      }
    }
  }

  &__title {
    position: absolute;
    bottom: 20px;
    left: -20px;
    z-index: 2;
    line-height: 1.0;

    p {
      @include text(small, 900);
      color: $COLOR_OVERLAY_TEXT;
    }
  }

  &__img-wrapper {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  &__img {
    position: relative;
    width: 100%;
    height: 100%;
    margin-left: auto;
    line-height: 0;
    transition: 0.5s;
    &::before {
      display: block;
      padding-top: 66.6%; // 3:2
    }

    &:after {
      position: absolute;
      display: block;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: #fff;
      opacity: 0;
      z-index: 3;
      transition: 1s;
    }

    img {
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      object-fit: cover;
      max-width: none;
      // width: calc(100% + 60px);
      opacity: 1;
      transition: opacity 0.35s, transform 0.35s;
      // transform: translate3d(-30px,0,0) scale(1.12);
      backface-visibility: hidden;
    }
  }

  &__grad {
    display: block;
    position: absolute;
    width: 100%;
    height: 40%;
    bottom: 0;
    left: 0;
    background: linear-gradient(180deg, rgba(0,0,0,0) 0,rgba(0,0,0,.5) 100%);
    z-index: 1;
  }
}

@media screen and (max-width: $BREAKPOINT_MD) {
  .list-work {
    &__list {
      margin: 0 10px 0 0;

      &:nth-of-type(2n) {
        margin: 80px 0 0 10px;

      }

      a {
        width: 100%;
        height: 100% ;
        margin: 0;
      }
    }

    &__img {
      width: 100%;
      height: 100% ;
    }
    &__title {
      position: relative;
      bottom: 0;
      left: 0;

        p {
          color: $COLOR_OVERLAY_TEXT;
          @include text(small, 700);
          margin-bottom: 5px;

          &:nth-of-type(2) {
            margin: 0;
          }
        }
    }
  }
}
</style>
