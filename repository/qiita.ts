import { axios } from '~/plugins/axios/axios-interceptor';
import { environments } from '~/plugins/environments';

export default {
  async getQiitaBlog (): Promise<any[]> {
    // eslint-disable-next-line camelcase
    const query: {headers: { Authorization: string }, params: {page: number, per_page: number }} =
    {
      headers: {
        Authorization: `Bearer ${environments.QIITA_TOKEN}`
      },
      params: {
        page: 1,
        per_page: 5
      }
    };
    return await axios.$get('https://qiita.com/api/v2/authenticated_user/items', query);
  }
};
