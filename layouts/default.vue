<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="scss">
@import "~/assets/scss/variables";

html,
body {
  height: 100%;
}

html {
  font-family: sans-serif;
  font-size: 62.5%;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  background: $COLOR_MAIN;
}

* {
  &:hover {
    transition: 0.8s;
  }

  &::before,
  &::after {
    content: "";
  }
}

h1,
h2 {
  margin: 0;
  line-height: 6rem;

  @include text(large, bold);
}

p {
  @include text(small, regular);
}

a {
  text-decoration: none;

  &:focus,
  &:link,
  &:active,
  &:visited {
    color: $COLOR_BLACK;
  }
}

img {
  width: 100%;
  height: 100%;
}

.footer {
  height: 280px;
  margin-left: 120px;
  padding: 60px 0;
  box-sizing: border-box;
}

.pc-only {
  display: block;
}

.sp-only {
  display: none;
}

@media screen and (max-width: $BREAKPOINT_SP) {
  h2 {
    @include text(normal, bold);
  }

  .footer {
    background: $COLOR_BLACK;
    color: $COLOR_WHITE;
    margin-left: 0;
    padding: 0;
    line-height: 6rem;
    height: 60px;

    p {
      margin: 0 0 0 30px;
    }
  }

  .pc-only {
    display: none;
  }

  .sp-only {
    display: block;
  }
}
</style>
