<template>
  <div>
    <TheHeader
      :menu-item="menuItem"
    />
    <nuxt />
    <TheFooter
      :menu-item="menuItem"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

import { IMenu } from '~/types/utility/menu';

type Data = {
  menuItem: IMenu[];
}

export default Vue.extend({
  data (): Data {
    return {
      menuItem: [
        {
          name: 'HOME',
          link: '/'
        },
        {
          name: 'WORKS',
          link: '/work'
        }
      ]
    };
  }
});
</script>>

<style lang="scss">
.footer {
  height: 280px;
  margin-left: 120px;
  padding: 50px 0;
  box-sizing: border-box;
  color: $COLOR_TEXT_WHITE;
}

@media screen and (max-width: $BREAKPOINT_MD) {
  .footer {
    align-items: center;
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
