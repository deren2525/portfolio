<template>
  <div class="container">
    <div v-show="shownProfile" class="profile-overlay" @click="styleOfScroll(shownProfile)" />
    <MenuIcon @click="styleOfScroll(shownProfile)" />
    <div class="works">
      <div class="content">
        <div class="theme-color">
          <span class="theme-color__item" @click="clickTheme('DARK')" />
          <span class="theme-color__item" @click="clickTheme('LIGHT')" />
        </div>
        <h1>DEREN's Works</h1>
        <section class="section">
          <h2>Art - CodePen -</h2>
          <WorkList :work-items="codePenWorkItems" />
        </section>
        <section class="section">
          <h2>Design</h2>
          <WorkList :work-items="designWorkItems" />
        </section>
      </div>
      <div class="footer">
        <SnsListContent :sns-list="snsList" />
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
              フロントエンドのお仕事をしてる
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
          </div>
          <section class="section section--work" @click="shownProfile = false">
            <h2 class="title">
              Works
            </h2>
            <p>>>></p>
          </section>
        </section>
        <section class="section section--blog">
          <h2 class="qiita-img">
            Blog
            <p>
              <img src="~/assets/img/logo/logo-qiita.svg" alt="logo-qiita" draggable="false">
            </p>
          </h2>
          <BlogListContent :contribution="1246" :date="[2020, 7, 6]" :article-list="blogItems" />
        </section>
        <section class="section section--activities">
          <h2>Activities</h2>
          <ActivitiesListContent :activities-list="activitiesList" />
        </section>
      </div>
      <div class="footer">
        <SnsListContent :sns-list="snsList" />
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

type Data = {
  blogItems: IBlog[];
  codePenWorkItems: IWork[];
  designWorkItems: IWork[];
  activitiesList: IActivity[];
  snsList: ISns[];
  shownProfile: boolean;
  themeColor: string;
}

export default Vue.extend({
  async asyncData () {
    const blogItems = await qiitaApi
      .getQiitaBlog()
      .catch((error) => {
        console.error(error);
        return [];
      });
    return { blogItems };
  },

  data (): Data {
    return {
      blogItems: [],
      codePenWorkItems: require('~/assets/data/codePen'),
      designWorkItems: require('~/assets/data/design'),
      activitiesList: require('~/assets/data/activities'),
      snsList: require('~/assets/data/sns'),
      shownProfile: false,
      themeColor: 'LIGHT'
    };
  },

  mounted () {
    document.documentElement.setAttribute('theme', this.themeColor);
  },

  methods: {
    styleOfScroll (shownProfile: boolean): boolean {
      if (shownProfile) {
        document.body.style.overflow = 'auto';
      } else {
        document.body.style.overflow = 'hidden';
      }
      return (this.shownProfile = !this.shownProfile);
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
    background: red;
    border-radius: 50%;
    cursor: pointer;
    margin-right: 10px;
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
    border-bottom: 1px solid $COLOR_BLACK;
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
    background: $COLOR_BLACK;
    color: $COLOR_CONTAINER;
    box-sizing: border-box;
    cursor: pointer;
    p {
      @include text(regular, bold);
    }
  }
  &--blog {
    border-bottom: 1px solid $COLOR_BLACK;
  }
}

.overlay {
  width: 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba($COLOR_BLACK, 0.8);
  transition: 0.8s;
  color: $COLOR_WHITE;
}

.profile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba($COLOR_BLACK, 0.9);
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
      background: $COLOR_WHITE;
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

.qiita-img {
  display: flex;
  justify-items: center;
  align-items: center;
  width: 100px;
  p {
    width: 100px;
    min-width: 100px;
    height: 60px;
    margin: 0 0 0 30px;
    img {
      width: 100%;
    }
  }
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

  .profile {
    width: 85%;
    left: -85%;
    &__content {
      overflow-x: hidden;
      margin: 30px 0 0 15px;
      h1 {
        padding-top: 30px;
        background: $COLOR_WHITE;
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

  .qiita-img {
    img {
      width: 100%;
      border: none;
    }
  }
}
</style>
