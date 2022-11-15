import template from "art-template";
import {logo} from "./logo";

export const genArticleCard = (options: {
    title: string,
    url: string,
    date: string,
    description: string,
}) => {
    const { title, url, date, description } = options;
    return template(`${__dirname}/template.html`, {
        logo,
        title,
        url,
        date,
        description,
    });
}