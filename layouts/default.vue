<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="scss">
.footer {
  height: 280px;
  margin-left: 120px;
  padding: 50px 0;
  box-sizing: border-box;
  color: $COLOR_WHITE;
}

@media screen and (max-width: $BREAKPOINT_SP) {
  .footer {
    align-items: center;
    background: $COLOR_BLACK;
    color: $COLOR_WHITE;
    margin-left: 0;
    padding: 0;
    line-height: 6rem;
    height: auto;

    .copyright {
      padding-bottom: 30px;
      margin: 0 0 0 30px;
    }
  }
}
</style>
