<template>
  <div class="container">
    <div v-show="shownProfile" class="profile-overlay" @click="styleOfScroll(shownProfile)" />
    <MenuIcon @click="styleOfScroll(shownProfile)" />
    <div class="works">
      <div class="content">
        <div class="theme-color">
          <span class="theme-color__item" :class="{'theme-color__item--active': themeColor === 'BLUE'}" style="background: #3D425F" @click="clickTheme('BLUE')" />
          <span class="theme-color__item" :class="{'theme-color__item--active': themeColor === 'LIGHT_BLUE'}" style="background: #7FC2C2" @click="clickTheme('LIGHT_BLUE')" />
          <span class="theme-color__item" :class="{'theme-color__item--active': themeColor === 'YELLOW'}" style="background: #F8DA5B" @click="clickTheme('YELLOW')" />
          <span class="theme-color__item" :class="{'theme-color__item--active': themeColor === 'PINK'}" style="background: #F39E7A" @click="clickTheme('PINK')" />
          <span class="theme-color__item" :class="{'theme-color__item--active': themeColor === 'GREEN'}" style="background: #C8EA7E" @click="clickTheme('GREEN')" />
          <span class="theme-color__item" :class="{'theme-color__item--active': themeColor === 'DARK'}" style="background: #1a1919" @click="clickTheme('DARK')" />
        </div>
        <h1>DEREN's Works</h1>
        <section class="section">
          <h2>Art - CodePen -</h2>
          <WorkList :items="codePenWorks" />
        </section>
        <section class="section">
          <h2>Chrome Extension</h2>
          <WorkList :items="otherWorks" />
        </section>
        <section class="section">
          <h2>Design</h2>
          <WorkList :items="designWorks" />
        </section>
      </div>
      <div class="footer">
        <SnsList />
        <p class="copyright">
          Copyright &copy; 2020 DEREN
        </p>
      </div>
    </div>

    <div :class="{ active: shownProfile }" class="profile">
      <div class="profile__content">
        <h1>Profile</h1>
        <section class="section section--profile">
          <div class="profile-content">
            <h2 class="name">
              DEREN
            </h2>
            <p class="text">
              フロントエンドのお仕事をしてる<br>
              ノリでCSSでいろいろ作ってるけど<br>
              普段の業務はNuxt、Typescriptメインで動いています
            </p>
          </div>
          <p class="profile-img">
            <img src="~/assets/img/profile.png" alt="deren" draggable="false">
          </p>
        </section>
        <section class="section section--skill">
          <h2>Skill set</h2>
          <div class="skill-set-content">
            <div class="skill-set-content__item">
              <h3>Programming language</h3>
              <p>HTML</p>
              <p>CSS</p>
              <p>JavaScript</p>
              <p>TypeScript</p>
              <p>Processing</p>
            </div>
            <div class="skill-set-content__item">
              <h3>Frameworks</h3>
              <p>Pug</p>
              <p>SCSS</p>
              <p>Vue</p>
              <p>Nuxt</p>
              <p>React</p>
              <p>Processing.js</p>
            </div>
            <div class="skill-set-content__item">
              <h3>Other</h3>
              <p>Figma</p>
            </div>
          </div>
          <section class="section section--work" @click="styleOfScroll(shownProfile)">
            <h2 class="title">
              Works
            </h2>
            <p>>>></p>
          </section>
        </section>
        <section class="section section--blog">
          <h2>Blog（Qiita）</h2>
          <BlogList :items="qiitaBlogList" />
        </section>
        <section class="section section--activities">
          <h2>Activities</h2>
          <ActivitiesList :items="activities" />
        </section>
      </div>
      <div class="footer">
        <SnsList />
        <p class="copyright">
          Copyright &copy; 2020 DEREN
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { IBlog } from '~/types/blog';
import { IWork } from '~/types/work';
import { IActivity } from '~/types/activity';
import { ISns } from '~/types/sns';

import qiitaApi from '~/repository/qiita';

import firebase from '~/plugins/firebase';
import 'firebase/firestore';

type Data = {
  db?: firebase.firestore.Firestore,
  qiitaBlogList: IBlog[];
  codePenWorks: IWork[];
  designWorks: IWork[];
  otherWorks: IWork[];
  activities: IActivity[];
  snsList: ISns[];
  shownProfile: boolean;
  themeColor: string;
}

export default Vue.extend({
  fetch () {
    Promise.all([
      this.loadedQiitaList(),
      this.loadedWorksCodePen(),
      this.loadedWorksDesign(),
      this.loadedWorksOther(),
      this.loadedActivities()
    ]);
  },

  data (): Data {
    return {
      db: firebase.firestore(),
      qiitaBlogList: [],
      codePenWorks: [],
      designWorks: [],
      otherWorks: [],
      activities: [],
      snsList: [],
      shownProfile: false,
      themeColor: 'BLUE'
    };
  },

  created () {
    this.qiitaBlogList.sort((a: IBlog, b: IBlog) => {
      return b.likeCount - a.likeCount;
    });
  },

  mounted () {
    document.documentElement.setAttribute('theme', this.themeColor);
  },

  methods: {
    async loadedQiitaList () {
      this.qiitaBlogList = await qiitaApi
        .getQiitaBlog()
        .then((res) => {
          return res.sort((a:IBlog, b: IBlog) => b.likeCount - a.likeCount);
        })
        .catch((error) => {
          console.error(error);
          return [];
        });
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

    loadedWorksOther () {
      if (!this.db) { return; }
      this.db.collection('other').get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc: firebase.firestore.QueryDocumentSnapshot) => {
            this.otherWorks.push(doc.data() as IWork);
          });
          this.codePenWorks.sort((a: IWork, b: IWork) => {
            return b.no - a.no;
          });
        })
        .catch(error => console.error(error));
    },

    loadedActivities () {
      if (!this.db) { return; }
      this.db.collection('activities').get()
        .then((querySnapshot) => {
          querySnapshot.forEach((doc: firebase.firestore.QueryDocumentSnapshot) => {
            this.activities.push(doc.data() as IActivity);
          });
          this.activities.sort((a: IActivity, b: IActivity) => {
            return b.no - a.no;
          });
        })
        .catch(error => console.error(error));
    },

    styleOfScroll (shownProfile: boolean) {
      document.body.style.overflow = shownProfile ? 'auto' : 'hidden';
      this.shownProfile = !this.shownProfile;
    },
    clickTheme (theme: string) {
      this.themeColor = theme;
      document.documentElement.setAttribute('theme', this.themeColor);
    }
  }
});
</script>

<style lang="scss">
body {
  &.isScroll {
    overflow: hidden;
  }
}

h1 {
  padding-left: 30px;
}
h3 {
  margin: 0 0 30px 0;
  @include text(normal, bold);
}

.content {
  padding: 120px 0 30px;
  background: $COLOR_CONTAINER;
  margin-left: 120px;
}

.theme-color {
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0 30px;
  &__item {
    display: block;
    width: 30px;
    height: 30px;
    background: #FFF;
    border: 2px solid #FFF;
    cursor: pointer;
    margin-right: 10px;
    opacity: 0.6;
    &--active {
      opacity: 1;
    }
  }
}

.section {
  padding: 60px 30px 0;
  background: $COLOR_CONTAINER;
  &--profile,
  &--skill,
  &--work,
  &--blog,
  &--activities,
  &--link {
    padding-bottom: 60px;
  }
  &--profile {
    display: flex;
    border-bottom: 1px solid $COLOR_TEXT;
  }
  &--skill {
    position: relative;
    margin-bottom: 150px;
  }
  &--work {
    position: absolute;
    right: 0;
    bottom: -150px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 80%;
    height: 180px;
    background: $COLOR_INITIAL_BG;
    box-sizing: border-box;
    cursor: pointer;
    p {
      @include text(regular, bold);
      color: $COLOR_TEXT_BLACK;
    }
    .title {
      color: $COLOR_TEXT_BLACK;
    }
  }
  &--blog {
    border-bottom: 1px solid $COLOR_TEXT;
  }
}

.profile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: $COLOR_OVERLAY;
  cursor: pointer;
  opacity: 1;
  transition: 0.8s;
  z-index: $PROFILE_CONTENT_OVERLAY;
}

.profile {
  position: fixed;
  top: 0;
  left: -80%;
  width: 80%;
  height: 100%;
  background: $COLOR_ACCENT;
  transition: 0.8s;
  overflow: scroll;
  z-index: $PROFILE_CONTENT;
  &.active {
    left: 0 !important;
    transition: 0.8s;
  }
  &__content {
    margin: 60px 0 0 120px;
    h1 {
      padding-top: 60px;
      background: $COLOR_CONTAINER;
    }
  }
}

.profile-img {
  width: 120px;
  min-width: 120px;
  height: 120px;
  margin-right: 10%;
  margin-left: auto;
  img {
    width: 100%;
    height: 100%;
    border: none;
  }
}

.skill-set-content {
  $base: &;
  display: flex;
  box-sizing: border-box;
  &__item {
    width: 50%;
    & + #{$base}__item {
      padding-left: 10px;
    }
  }
}

.copyright {
  color: $COLOR_TEXT_WHITE;
}

@media screen and (max-width: $BREAKPOINT_SP) {
  h1,
  h2 {
    padding-left: 10px;
  }
  .section {
    padding: 0;
    &--profile,
    &--skill,
    &--work,
    &--blog,
    &--activities,
    &--link {
      padding: 0 15px 0 0;
    }
    &--profile {
      flex-wrap: wrap-reverse;
    }
    &--skill {
      padding-bottom: 0;
      margin-bottom: 0;
    }
    &--work {
      position: relative;
      right: auto;
      bottom: auto;
      width: calc(100% + 15px);
      height: 150px;
      margin-top: 60px;
      .title {
        user-select: none;
        padding: 0;
      }
    }
  }

  .content {
    margin-left: 60px;
    padding: 60px 0 30px;
  }

  .theme-color {
    padding: 0 10px;

    &__item {
      width: 40px;
      height: 40px;
    }
  }

  .profile {
    width: 85%;
    left: -85%;
    &__content {
      overflow-x: hidden;
      margin: 30px 0 0 15px;
      h1 {
        padding-top: 30px;
      }
      h2 {
        padding-top: 30px;
      }
      h3 {
        @include text(small, bold);
        margin-bottom: 15px;
      }
      .name {
        line-height: 1.6rem;
        @include text(small, bold);
      }
      .text {
        margin-left: 15px;
      }
    }
  }

  .profile-img {
    margin: auto;
  }

  .profile-content {
    margin: 0 0 30px 0;
  }

  .skill-set-content {
    $base: &;
    display: block;
    &__item {
      width: 100%;
      margin: 20px 0 0 15px;
      & + #{$base}__item {
        padding-left: 0;
      }
      p {
        margin: 0;
        line-height: 1.6rem;
        + p {
          margin-top: 10px;
        }
      }
    }
  }
}
</style>
