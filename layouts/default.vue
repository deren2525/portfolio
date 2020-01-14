<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="scss">
@import "~/assets/scss/variables";

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
  color: $COLOR_BLACK;
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
</style>
