import axios from 'axios';

export const getArticle = async (index) => {
    // 通过在线服务将RSS默认的xml数据转换为JSON格式
    const originUrl = 'https://it200.cn/rss.xml';
    const rssUrl = `https://api.rss2json.com/v1/api.json?rss_url=${originUrl}`;
    const { data: { items } } = await axios.get(rssUrl);
    const { title, pubDate: date, link: url, description } = items[
        index || 0
    ];
    return {
        title: title.length > 20 ? title.substring(0, 20) + ' ...' : title,
        url,
        date,
        description:
            description
                .replace(/<h3>.*<\/h3>|<figcaption>.*<\/figcaption>|<[^>]*>/gm, '')
                .substring(0, 30) + '...',
    };
}