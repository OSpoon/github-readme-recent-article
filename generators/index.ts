import template from "art-template";

export const genArticleCard = (options: {
    title: string,
    url: string,
    date: string,
    description: string,
}) => {
    const { title, url, date, description } = options;
    return template(`${__dirname}/template.html`, {
        title,
        url,
        date,
        description,
    });
}