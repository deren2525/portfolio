<template>
  <div class="container">
    <div class="profile-overlay" @click="showProfile = false" :class="{ active: showProfile }" />
    <MenuIcon @click="showProfile = true;" />
    <div class="works" @click="showProfile = false">
      <div class="content">
        <h1>Works</h1>
        <section class="section">
          <h2>Art - CodePen -</h2>
          <WorkList :workItems="codePenWorkItems" />
        </section>
        <section class="section">
          <h2>Design</h2>
          <WorkList :workItems="designWorkItems" />
        </section>
      </div>
      <div class="footer">
        <p>Copyright &copy; 2020 DEREN</p>
      </div>
    </div>

    <div class="profile" :class="{ active: showProfile }">
      <div class="profile__content">
        <h1>Profile</h1>
        <section class="section section--profile">
          <div class="profile-content">
            <h2 class="name">DEREN</h2>
            <p>フロントエンドエンジニアみならい</p>
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
            <h2 class="title">Works</h2>
            <p>>>></p>
          </section>
        </section>
        <section class="section section--blog">
          <h2>Blog - Qiita</h2>
          <BlogListContent :contribution="1208" :date="[2020, 1, 12]" :article-list="articleList" />
        </section>
        <section class="section section--activities">
          <h2>Activities</h2>
          <ActivitiesListContent :activities-list="activitiesList" />
        </section>
        <section class="section section--link">
          <h2>Links / SNS</h2>
          <SnsListContent :sns-list="snsList" />
        </section>
      </div>
      <div class="footer">
        <p>Copyright &copy; 2020 DEREN</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import MenuIcon from "~/components/MenuIcon.vue";
import WorkList from "~/components/WorkList.vue";
import BlogListContent from "~/components/BlogListContent.vue";
import SnsListContent from "~/components/SnsListContent.vue";
import ActivitiesListContent from "~/components/ActivitiesListContent.vue";
import $axios from "axios";
import codePen from "~/assets/data/codePen.json";
import design from "~/assets/data/design.json";

// qiita api URL
const BASE_URL = "https://qiita.com/api/v2/";

export default {
  components: {
    MenuIcon,
    WorkList,
    BlogListContent,
    SnsListContent,
    ActivitiesListContent
  },
  data() {
    return {
      showProfile: false,
      codePenWorkItems: codePen,
      designWorkItems: design,
      activitiesList: [
        {
          title: "CSSイラストレーション",
          url: "https://megurocss.connpass.com/event/135560/",
          urlTitle: "Meguro.css #6 @ oRo"
        },
        {
          title: "三重の小学校4校へプログラミング授業を実施",
          url: "https://www.nikkan.co.jp/articles/view/00496392",
          urlTitle: "日刊工業新聞"
        }
      ],
      snsList: [
        { name: "Twitter", url: "https://twitter.com/study_dedede" },
        { name: "CodePen", url: "https://codepen.io/deren2525/" },
        { name: "Qiita", url: "https://qiita.com/deren2525" },
        { name: "Github", url: "https://github.com/deren2525" },
        { name: "slides", url: "https://slides.com/deren" }
      ]
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
      return {
        left: -screenWidth + "px"
      };
    }
  },
  async asyncData({ env }: { env: any }) {
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
}

.profile {
  position: fixed;
  top: 0;
  left: -80%;
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

      p {
        margin-left: 15px;
      }
    }
  }

  .profile-img {
    margin: auto;
  }

  .profile-content {
    margin: 30px 0;
  }

  .skill-set-content {
    $base: &;

    display: block;

    &__item {
      width: 100%;
      margin: 20px 0 0 15px;

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
