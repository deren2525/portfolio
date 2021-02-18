import axios from 'axios';
import { IBlog } from '@/types/blog';
import { resGetQiita } from '@/types/dto/qiita';

export default {
  async getQiitaBlog (): Promise<IBlog[]> {
    const res = await axios.get('https://qiita.com/api/v2/authenticated_user/items', {
      headers: {
        Authorization: `Bearer ${process.env.VUE_APP_QIITA_TOKEN}`
      }
    });

    if (!res) return [];

    return res.data.map((item: resGetQiita) => {
      return {
        day: item.created_at || Date(),
        title: item.title || '',
        url: item.url || '',
        likeCount: item.likes_count || 0
      };
    });
  }
};
