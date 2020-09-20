// https://qiita.com/itouuuuuuuuu/items/4132e3b7ddf2cbf02442#axios-%E5%85%B1%E9%80%9A%E5%87%A6%E7%90%86%E9%83%A8%E5%88%86%E3%81%AE%E4%BD%9C%E6%88%90
import { NuxtAxiosInstance } from '@nuxtjs/axios';
import { Context } from '@nuxt/types';

// eslint-disable-next-line import/no-mutable-exports
export let axios: NuxtAxiosInstance;

export default ({ $axios }: Context) => {
  $axios.onRequest(() => {
  });

  $axios.onResponse(() => {
  });

  $axios.onError(() => {
  });

  axios = $axios;
};
