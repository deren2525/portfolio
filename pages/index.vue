<template>
  <div>
    <TheThemeColor
      :color="themeColor"
      @color="v => clickTheme(v)"
    />

    <section id="profile" class="profile">
      <div class="profile__container">
        <h1
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <span>PROFILE</span>
        </h1>
        <div
          data-aos="fade-up"
          data-aos-duration="1000"
          class="profile__content"
        >
          <p class="profile__img">
            <img src="~/assets/img/profile.png" alt="deren" draggable="false">
          </p>
          <div class="profile__text">
            <p class="profile__name">
              DEREN
            </p>
            <div class="profile__discription">
              フロントエンドのお仕事をしてる。<br>
              CSSでいろいろ作っていますが<br>
              普段の業務はNuxt、Typescriptメインで動いています。<br>
              <br>
              ジャンル問わず楽しいものをひたすら作り続けたい人生にしたいです。
            </div>
            <div class="profile__skill">
              <div class="profile__skill-inner">
                <div class="profile__skill-title">
                  Programming<br>language
                </div>
                <p>HTML / CSS</p>
                <p>JavaScript</p>
                <p>TypeScript</p>
                <p>Processing</p>
              </div>
              <div class="profile__skill-inner">
                <div class="profile__skill-title">
                  Frameworks
                </div>
                <p>Pug.js</p>
                <p>SCSS</p>
                <p>Vue.js</p>
                <p>Nuxt.js</p>
                <p>React.js</p>
                <p>Processing.js</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="work" class="work">
      <div class="work__container">
        <h1
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <span>WORKS</span>
        </h1>
        <div class="work__content">
          <!-- <div
            class="work__tab"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <span
              v-for="(tab, idx) in ['CODEPEN', 'DESIGN', 'OTHER']"
              :key="idx"
              class="work__tab-item"
              @click="clickWorkItem(tab, idx)"
            >
              {{ tab }}
            </span>
            <div ref="border" class="border" :style="{ left: 0 }" />
          </div> -->

          <div
            class="work__tab-content"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div class="list-work">
              <swiper :options="swiperOptions('codepen')" class="list-work">
                <swiper-slide v-for="item in codePenWorks" :key="item.id" class="list-work__list">
                  <a :href="item.url" target="_blank">
                    <div class="list-work__img">
                      <img
                        :src="item.imgSrc"
                        :alt="item.name"
                        draggable="false"
                      >
                      <span class="list-work__grad" />
                    </div>
                  </a>
                  <div class="list-work__title">
                    <p>No.{{ item.no }}</p>
                    <p>{{ item.name }}</p>
                  </div>
                </swiper-slide>
                <div slot="button-prev" class="prev-button prev-button--codepen" />
                <div slot="button-next" class="next-button next-button--codepen" />
              </swiper>
            </div>

            <!-- <div
              v-show="activeWorksTab === 'DESIGN'"
              class="work__tab-content"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <div class="list-work">
                <swiper v-if="designWorks.length !== 0" :options="swiperOptions('design')" class="list-work">
                  <swiper-slide v-for="item in designWorks" :key="item.id" class="list-work__list">
                    <a :href="item.url" target="_blank">
                      <p class="list-work__img">
                        <img
                          :src="item.imgSrc"
                          :alt="item.name"
                          draggable="false"
                        >
                        <span class="list-work__grad" />
                      </p>
                      <div class="list-work__title">
                        <p>No.{{ item.no }}</p>
                        <p>{{ item.name }}</p>
                      </div>
                    </a>
                  </swiper-slide>
                </swiper>
                <div class="prev-button prev-button--design" />
                <div class="next-button next-button--design" />
              </div>
            </div>

            <div
              v-show="activeWorksTab === 'OTHER'"
              class="work__tab-content"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <div class="list-work">
                <swiper v-if="otherWorks.length !== 0" :options="swiperOptions('other')" class="list-work">
                  <swiper-slide v-for="item in otherWorks" :key="item.id" class="list-work__list">
                    <a :href="item.url" target="_blank">
                      <p class="list-work__img">
                        <img
                          :src="item.imgSrc"
                          :alt="item.name"
                          draggable="false"
                        >
                        <span class="list-work__grad" />
                      </p>
                      <div class="list-work__title">
                        <p>No.{{ item.no }}</p>
                        <p>{{ item.name }}</p>
                      </div>
                    </a>
                  </swiper-slide>
                </swiper>
                <div class="prev-button prev-button--other" />
                <div class="next-button next-button--other" />
              </div>
            </div> -->
          </div>
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            class="view-all"
          >
            <nuxt-link to="/work">
              View All
            </nuxt-link>
          </p>
        </div>
      </div>
    </section>

    <section id="blog" class="blog">
      <div
        class="blog__container"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h1
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <span>BLOG（Qiita）</span>
        </h1>
        <ListBlog
          data-aos="fade-up"
          data-aos-duration="1000"
          :items="qiitaListBlog"
        />
      </div>
    </section>

    <section id="activity" class="activity">
      <div class="activity__container">
        <h1
          data-aos="fade-right"
          data-aos-duration="1000"
        >
          <span>Activities</span>
        </h1>
        <ListActivities
          data-aos="fade-up"
          data-aos-duration="1000"
          :items="activities"
        />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import * as Swiper from 'swiper';
import { Firestore, getFirestore, getDocs, collection, QueryDocumentSnapshot } from 'firebase/firestore';
import firebaseApp from '~/plugins/firebase';

import TheThemeColor from '~/components/uniques/TheThemeColor.vue';

import { IBlog } from '~/types/blog';
import { IWork } from '~/types/work';
import { IActivity } from '~/types/activity';
import { ISns } from '~/types/sns';

import qiitaApi from '~/repository/qiita';

type Data = {
  db?: Firestore | null;
  qiitaListBlog: IBlog[];
  codePenWorks: IWork[];
  designWorks: IWork[];
  otherWorks: IWork[];
  activities: IActivity[];
  snsList: ISns[];
  themeColor: string;
  activeWorksTab: 'CODEPEN' | 'DESIGN' | 'OTHER';

  // loading
  codepenLoading: boolean;
  designLoading: boolean;
  otherLoading: boolean;
}

export default Vue.extend({
  components: {
    TheThemeColor
  },

  async fetch () {
    this.db = await getFirestore(firebaseApp);

    this.loadedQiitaList();
    this.loadedWorksCodePen();
    // this.loadedWorksDesign();
    // this.loadedWorksOther();
    this.loadedActivities();
  },

  data (): Data {
    return {
      db: null,
      qiitaListBlog: [],
      codePenWorks: [],
      designWorks: [],
      otherWorks: [],
      activities: [],
      snsList: [],
      themeColor: '',
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

    async loadedQiitaList () {
      this.qiitaListBlog = await qiitaApi
        .getQiitaBlog()
        .then(res => res)
        .catch((error) => {
          console.error(error);
          return [];
        });
    },

    async loadedWorksCodePen () {
      if (!this.db) { return; }
      await getDocs(collection(this.db, 'codepen'))
        .then((querySnapshot) => {
          querySnapshot.forEach((doc: QueryDocumentSnapshot) => {
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
      await getDocs(collection(this.db, 'design'))
        .then((querySnapshot) => {
          querySnapshot.forEach((doc: QueryDocumentSnapshot) => {
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
      await getDocs(collection(this.db, 'other'))
        .then((querySnapshot) => {
          querySnapshot.forEach((doc: QueryDocumentSnapshot) => {
            this.otherWorks.push(doc.data() as IWork);
          });
          this.otherWorks.sort((a: IWork, b: IWork) => {
            return b.no - a.no;
          });
        })
        .catch(error => console.error(error));
    },

    async loadedActivities () {
      if (!this.db) { return; }
      await getDocs(collection(this.db, 'activities'))
        .then((querySnapshot) => {
          querySnapshot.forEach((doc: QueryDocumentSnapshot) => {
            this.activities.push(doc.data() as IActivity);
          });
          this.activities.sort((a: IActivity, b: IActivity) => {
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
h1 {
  padding-left: 30px;
}

@mixin container() {
  position: relative;
  width: $CONTAINER_WIDTH;
  margin: auto;
  padding: 100px 0 100px 100px;
  h1 {
    position: absolute;
    top: 100px;
    left: 0;
    width: 68px;
    padding: 0;
    @include text(huge, 400);
    word-wrap: break-word;
    overflow-wrap: break-word;
    text-orientation: mixed;
    writing-mode: vertical-rl;
  }

  @media screen and (max-width: $BREAKPOINT_MD) {
    width: 100%;
  }

  @media screen and (max-width: $BREAKPOINT_SM) {
    display: block;
    padding: 60px 0;
    h1 {
      position: relative;
      width: auto;
      top: 0;
      word-wrap: initial;
      overflow-wrap: initial;
      text-orientation:initial;
      writing-mode:initial;
    }
  }
}

.profile {
  min-height: 400px;
  color: $COLOR_TEXT_BLACK;
  background: $COLOR_CONTAINER;

  &__container {
    @include container();
      padding: 20px 0 100px 100px;
  }

  &__content {
    display: flex;
    justify-content: space-between;
  }

  &__name {
    margin: 0 0 30px;
    @include text(large, 400);
  }

  &__discription {
    margin: 0 0 30px;
    @include text(small, 400);
  }

  &__img {
    width: 300px;
    height: 300px;
    margin: 0 30px 0 0;
    object-fit: cover;
    img {
      height: auto;
    }
  }

  &__text {
    margin: 0 0 0 auto;
  }

  &__skill {
    position: relative;
    display: flex;
  }

  &__skill-inner {
    width: 50%;
  }

  &__skill-title {
    @include text(small, 700);
  }
}

.work {
  min-height: 400px;
  color: $COLOR_TEXT_WHITE;
  background: $COLOR_BLACK;
  &__container {
    @include container();
  }

  &__tab {
    position: relative;
    display: flex;
    justify-content: flex-end;
    margin-bottom: 35px;
    color: $COLOR_TAB;

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

.blog {
  min-height: 400px;
  color: $COLOR_TEXT_BLACK;
  background: $COLOR_CONTAINER;

  &__container {
    @include container()

  }
}

.activity {
  min-height: 400px;
  color: $COLOR_TEXT_WHITE;
  background: $COLOR_BLACK;
  &__container {
    @include container()

  }
}

.list-work {
  $base: &;
  position: relative;

  &__list {
    position: relative;
    margin-right: auto;
    transition: 0.8s;
    cursor: pointer;
    overflow: hidden;
    transition: 0.5s;

    a {
      display: block;
      transition: 0.5s;
    }

    &:last-of-type {
      margin: 0;
    }

    &:nth-child(even) {
      margin-right: 0;
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
    right: 30px;
    bottom: 10px;
    color: $COLOR_OVERLAY_TEXT;
    transition: transform 0.35s;
    @include text(small, 900);
    z-index: 10;

    p {
      color: $COLOR_OVERLAY_TEXT;
      @include text(small, 900);
    }
  }

  &__img {
    position: relative;
    width: 100%;
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
      width: calc(100% + 60px);
      opacity: 1;
      transition: opacity 0.35s, transform 0.35s;
      transform: translate3d(-30px,0,0) scale(1.12);
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

.view-all {
  display: flex;
  justify-content: flex-end;
  width: 150px;
  margin: 60px 0 0 auto;
  color: $COLOR_TEXT_WHITE;
  text-align: center;
  @include text(large, 400);
  a {
    width: 100%;
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

// swiper
.prev-button,
.next-button {
  position: absolute;
  top: calc(50% - 25px);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 2px solid $COLOR_WHITE;
  z-index: 10;
  cursor: pointer;
  &:before {
    position: absolute;
    top: 15px;
    color: $COLOR_WHITE;
  }
}

.prev-button {
  left: 0;
  &:before {
    content: '◀︎';
    left: 15px;
  }
}

.next-button {
  right: 0;
  &:before {
    content: '▶︎';
    right: 15px;
  }
}

@media screen and (max-width: $BREAKPOINT_MD) {
  .profile {
    padding: 0 15px;

    &__container {
      padding-top: 20px;
    }
  }

  .work {
    padding: 0 15px;
  }

  .blog {
    padding: 0 15px;
  }

  .activity {
    padding: 0 15px;
  }
}

@media screen and (max-width: $BREAKPOINT_SM) {
  .profile {
    width: 100%;

    &__content {
      display: block;
    }

    &__img {
      margin: auto;
    }

    &__text {
      margin-top: 30px;
    }

    &__name {
      margin-bottom: 30px;
      @include text(normal, 900);
    }
  }

  .list-work {
    &__title {
      display: none;
    }
  }

  .work {
    width: 100%;
  }

  .blog {
    width: 100%;
  }

  .activity {
    width: 100%;
  }
}
</style>
