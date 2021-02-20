import { accessorType } from '~/store';
import { EnvironmentsVariables } from '~/plugins/environments';

declare module 'vue/types/vue' {
  interface Vue {
    $environments: EnvironmentsVariables;
    $accessor: typeof accessorType;
  }
}

declare module '@nuxt/types' {
  interface NuxtAppOptions {
    $environments: EnvironmentsVariables;
    $accessor: typeof accessorType;
  }
}
