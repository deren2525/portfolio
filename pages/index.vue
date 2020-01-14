<template>
  <div class="container">
    <div
      class="profile-overlay"
      @click="showProfile = false"
      :class="{ active: showProfile }"
    />
    <MenuIcon
      @click="
        showProfile = true;
        log(showProfile);
      "
    />
    <div class="works" @click="showProfile = false">
      <div class="content">
        <h1>Works</h1>
        <section class="section">
          <h2>Art - CodePen -</h2>
          <WorkList :workItems="workItems" />
        </section>
        <section class="section">
          <h2>Design</h2>
          <WorkList :workItems="workItems" />
        </section>
      </div>
      <div class="footer">
        <p>Copyright &copy; 2019 DEREN</p>
      </div>
    </div>

    <div
      class="profile"
      :class="{ active: showProfile }"
      :style="styleInitProfilePosition"
    >
      <div class="profile__content">
        <h1>Profile</h1>
        <section class="section section--profile">
          <div class="profile-content">
            <h2>DEREN</h2>
            <p>フロントエンドエンジニアになりたい</p>
          </div>
          <p class="profile-img">
            <img src="~/assets/img/profile.png" />
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
          <section class="section section--work" @click="showProfile = false">
            <h2>Works</h2>
            <p>>>></p>
          </section>
        </section>
        <section class="section section--blog">
          <h2>Blog - Qiita</h2>
          <p>1208contribution (2019/01/12現在)</p>
          <div v-for="(article, index) in articleList" :key="index">
            <ul class="blog-list">
              <li class="blog-list__item">
                <a :href="article.url" target="_blank">{{ article.title }}</a>
              </li>
            </ul>
          </div>
          <p class="blog-other">
            >>>
            <a href="https://qiita.com/deren2525" target="_blank">
              記事一覧
            </a>
          </p>
        </section>
        <section class="section section--activities">
          <h2>Activities</h2>
          <ul class="activities-list">
            <li class="activities-list__item">
              <p class="activities-list__title">CSSイラストレーション</p>
              <p class="activities-list__link">
                <a href="article.url" target="_blank"
                  >>>> Meguro.css #6 @ oRo</a
                >
              </p>
            </li>
            <li class="activities-list__item">
              <p class="activities-list__title">
                三重の小学校4校へプログラミング授業を実施
              </p>
              <p class="activities-list__link">
                <a href="article.url" target="_blank">>>> 日刊工業新聞</a>
              </p>
            </li>
          </ul>
        </section>
        <section class="section section--link">
          <h2>Links / SNS</h2>
          <ul class="sns-list">
            <li class="sns-list__item">
              <p class="sns-list__link">
                <a href="https://twitter.com/study_dedede" target="_blank"
                  >Twitter</a
                >
              </p>
            </li>
            <li class="sns-list__item">
              <p class="sns-list__link">
                <a href="https://codepen.io/deren2525/" target="_blank"
                  >CodePen</a
                >
              </p>
            </li>
            <li class="sns-list__item">
              <p class="sns-list__link">
                <a href="https://qiita.com/deren2525" target="_blank">Qiita</a>
              </p>
            </li>
            <li class="sns-list__item">
              <p class="sns-list__link">
                <a href="https://github.com/deren2525" target="_blank"
                  >Github</a
                >
              </p>
            </li>
            <li class="sns-list__item">
              <p class="sns-list__link">
                <a href="https://slides.com/deren" target="_blank">slides</a>
              </p>
            </li>
          </ul>
        </section>
      </div>
      <div class="footer">
        <p>Copyright &copy; 2019 DEREN</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MenuIcon from "~/components/MenuIcon.vue";
import WorkList from "~/components/WorkList.vue";
import $axios from "axios";
// qiita api URL
const BASE_URL = "https://qiita.com/api/v2/";

export default {
  components: {
    MenuIcon,
    WorkList
  },
  data() {
    const workItems = ["XXXXXXXXXXXXXX", "XXXXXXXXXXXXXX"];
    return {
      showProfile: false,
      workItems
    };
  },
  methods: {
    log(text: string) {
      console.log(text);
    }
  },
  computed: {
    styleInitProfilePosition() {
      const screenWidth = window.innerWidth;
      console.log(screenWidth);
      return {
        left: -screenWidth + "px"
      };
    }
  },
  async asyncData({ env }) {
    const response = await $axios.get(BASE_URL + "authenticated_user/items", {
      headers: {
        Authorization: `Bearer ${env.QIITA_TOKEN}`
      },
      params: {
        page: 1,
        per_page: 5
      }
    });
    return { articleList: response.data };
  }
};
</script>

<style lang="scss">
@import "~/assets/scss/variables";

html,
body {
  height: 100%;
}

body {
  background: $COLOR_MAIN;
}

h1,
h2 {
  margin: 0;
  line-height: 6rem;

  @include text(large, bold);
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
  background: $COLOR_WHITE;
  margin-left: 120px;
}

.section {
  padding: 60px 30px 0;
  background: $COLOR_WHITE;

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
    color: $COLOR_WHITE;
    box-sizing: border-box;
    cursor: pointer;

    p {
      @include text(regular, bold);
    }
  }

  &--blog {
    border-bottom: 1px solid $COLOR_BLACK;
  }

  &--activities {
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

.work-list {
  $base: &;

  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;

  &__list {
    margin-right: 125px;
    margin-bottom: 60px;
    cursor: pointer;

    &:last-of-type {
      margin: 0;
    }

    &:hover {
      .overlay {
        width: 100%;
      }
    }
  }

  &__item {
    width: 240px;
    height: 240px;
    background: #eee;
    padding: 0;
    list-style: none;
  }
}

.profile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba($COLOR_BLACK, 0.9);
  cursor: pointer;
  opacity: 0;
  transition: 0.8s;
  z-index: -1;

  &.active {
    opacity: 1;
    transition: 0.8s;
    z-index: $PROFILE_CONTENT_OVERLAY;
  }
  // transition: 300ms left cubic-bezier(0.77, 0, 0.175, 1);
}

.profile {
  position: fixed;
  top: 0;
  width: 80%;
  height: 100%;
  background: $COLOR_MAIN;
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
  }
}

.skill-set-content {
  display: flex;

  &__item {
    width: 50%;
  }
}

.blog-list {
  display: inline-block;

  @include text(small, regular);

  &__item {
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
        color: #000;
        transition: 0.8s;
      }
    }
  }
}

.activities-list {
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

.blog-other {
  position: relative;
  display: inline-block;
  margin: 0;
  padding-bottom: 5px;
  color: $COLOR_BLACK;

  @include text(small, regular);

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
  }
}

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
        color: #000;
        transition: 0.8s;
      }
    }
  }
}

.footer {
  height: 280px;
  margin-left: 120px;
  padding: 60px 0;
  box-sizing: border-box;
}
</style>
