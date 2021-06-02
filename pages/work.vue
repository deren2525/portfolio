<template>
  <div class="work">
    <TheThemeColor
      :color="themeColor"
      @color="v => clickTheme(v)"
    />
    <div class="work__container">
      <h1>WORKS</h1>
      <div class="work__tab">
        <span
          v-for="(tab, idx) in ['CODEPEN', 'DESIGN', 'OTHER']"
          :key="idx"
          class="work__tab-item"
          @click="clickWorkItem(tab, idx)"
        >
          {{ tab }}
        </span>
        <div ref="border" class="border" :style="{ left: 0 }" />
      </div>

      <!-- CODEPEN -->
      <ListWork
        v-show="activeWorksTab === 'CODEPEN'"
        :items="codePenWorks"
        class="work__list"
        :is-loading="codepenLoading"
      />

      <!-- DESIGN -->
      <ListWork
        v-show="activeWorksTab === 'DESIGN'"
        :items="designWorks"
        class="work__list"
        :is-loading="designLoading"
      />

      <!-- OTHER -->
      <ListWork
        v-show="activeWorksTab === 'OTHER'"
        :items="otherWorks"
        class="work__list"
        :is-loading="otherLoading"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import * as Swiper from 'swiper';

import { IWork } from '~/types/work';

import firebase from '~/plugins/firebase';
import 'firebase/firestore';

type Data = {
  db?: firebase.firestore.Firestore,
  codePenWorks: IWork[];
  designWorks: IWork[];
  otherWorks: IWork[];
  themeColor: string;
  activeWorksTab: 'CODEPEN' | 'DESIGN' | 'OTHER';

    // loading
  codepenLoading: boolean;
  designLoading: boolean;
  otherLoading: boolean;
}

export default Vue.extend({
  fetch () {
    this.loadedWorksCodePen()
      .finally(() => {
        this.codepenLoading = false;
      });
    this.loadedWorksDesign()
      .finally(() => {
        this.designLoading = false;
      });
    this.loadedWorksOther()
      .finally(() => {
        this.otherLoading = false;
      });
  },

  data (): Data {
    return {
      db: firebase.firestore(),
      codePenWorks: [],
      designWorks: [],
      otherWorks: [],
      themeColor: 'BLUE',
      activeWorksTab: 'CODEPEN',

      // loading
      codepenLoading: false,
      designLoading: false,
      otherLoading: false
    };
  },

  mounted () {
    this.themeColor = this.$accessor.themeColor;
    document.documentElement.setAttribute('theme', this.themeColor);
  },

  methods: {
    swiperOptions (key: string): Swiper.SwiperOptions {
      return {
        spaceBetween: 20,
        slidesPerView: 2,
        slidesPerColumn: 2,
        slidesPerColumnFill: 'row',
        navigation: {
          prevEl: `.prev-button--${key}`,
          nextEl: `.next-button--${key}`
        }
      };
    },

    async loadedWorksCodePen () {
      if (!this.db) { return; }
      await this.db.collection('codepen').get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc: firebase.firestore.QueryDocumentSnapshot) => {
            this.codePenWorks.push(doc.data() as IWork);
          });
          this.codePenWorks.sort((a: IWork, b: IWork) => {
            return b.no - a.no;
          });
        })
        .catch(error => console.error(error));
    },

    async loadedWorksDesign () {
      if (!this.db) { return; }
      await this.db.collection('design').get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc: firebase.firestore.QueryDocumentSnapshot) => {
            this.designWorks.push(doc.data() as IWork);
          });
          this.designWorks.sort((a: IWork, b: IWork) => {
            return b.no - a.no;
          });
        })
        .catch(error => console.error(error));
    },

    async loadedWorksOther () {
      if (!this.db) { return; }
      await this.db.collection('other').get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc: firebase.firestore.QueryDocumentSnapshot) => {
            this.otherWorks.push(doc.data() as IWork);
          });
          this.otherWorks.sort((a: IWork, b: IWork) => {
            return b.no - a.no;
          });
        })
        .catch(error => console.error(error));
    },
    clickWorkItem (item: 'CODEPEN' | 'DESIGN' | 'OTHER', idx: number) {
      this.activeWorksTab = item;
      (this.$refs.border as HTMLElement).style.left = `${33.3 * idx}%`;
    },
    clickTheme (color: string) {
      this.themeColor = color;
      this.$accessor.setThemeColor(this.themeColor);
      document.documentElement.setAttribute('theme', this.themeColor);
    }
  }
});
</script>

<style lang="scss" scoped>

@mixin container() {
  position: relative;
  width: $CONTAINER_WIDTH;
  margin: auto;
  padding: 20px 0 100px;

 h1 {
    padding: 0;
    margin-bottom: 50px;
    @include text(huge, 400);
  }

  @media screen and (max-width: $BREAKPOINT_MD) {
    width: 100%;
  }

  @media screen and (max-width: $BREAKPOINT_SM) {
    display: block;
    padding: 30px 0;
  }
}

h1 {
  padding: 0;
  margin-bottom: 50px;
  @include text(huge, 400);
}

.work {
  color: $COLOR_TEXT_WHITE;
  background: $COLOR_BLACK;

  &__container {
    @include container();
    margin: auto;
  }

  &__tab {
    position: relative;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 35px;

    .border {
      width: 33.3%;
      height: 2px;
      background: $COLOR_TAB;
      display: block;
      position: absolute;
      top: 40px;
      left: 0;
      transition: all .3s ease-in;
      -o-transition: all .3s ease-in;
      -webkit-transition: all .3s ease-in;
      -moz-transition: all .3s ease-in;
    }
  }

  &__tab-item {
    display:block;
    width: 33.3%;
    height: 40px;
    text-align: center;
    padding: 0 10px;
    box-sizing: border-box;
    cursor: pointer;
  }
}

@media screen and (max-width: $BREAKPOINT_MD) {
  .work {
    padding: 0 15px;
  }
}

@media screen and (max-width: $BREAKPOINT_SM) {
  .work {
    width: 100%;
  }
}
</style>
