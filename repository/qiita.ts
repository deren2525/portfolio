import { axios } from '~/plugins/axios/axios-interceptor';
import { environments } from '~/plugins/environments';
import { IBlog } from '~/types/blog';
import { resGetQiita } from '~/types/dto/qiita';

export default {
  async getQiitaBlog (): Promise<IBlog[]> {
    // eslint-disable-next-line camelcase
    const query = {
      headers: {
        Authorization: `Bearer ${environments.QIITA_TOKEN}`
      }
    };
    const res: resGetQiita[] = await axios.$get('https://qiita.com/api/v2/authenticated_user/items', query);

    return res.map((item: resGetQiita) => {
      return {
        title: item.title,
        url: item.url
      }
    })
  }
};
