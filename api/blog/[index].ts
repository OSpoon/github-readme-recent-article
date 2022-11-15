import { NowRequest, NowResponse } from '@vercel/node';
import { getArticle } from '../../parsers/index';
import { genArticleCard } from '../../generators';

export default async (req: NowRequest, res: NowResponse) => {
    const { query: { index } } = req;
    const { title, url, date, description } = await getArticle(index);
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate');
    res.setHeader('Content-Type', 'image/svg+xml');
    return res.send(
        genArticleCard({
            title,
            url,
            date,
            description,
        })
    );
}

