import { newsFeedItemTemplate, newsFeedTemplate } from './news-feed.template';
import engine from '../../lib/engine/engine';

export default class NewsFeed {
    constructor(container) {
        if (typeof container === 'string') {
            container = document.querySelector(container);
        }

        this.container = container;
    }

    render(news) {
        const html = engine(newsFeedTemplate(news));
        this.container.innerHTML = html;
        console.log(this.container.innerHTML);
    }

    addNews(title) {
        if (!this.container.firstElementChild) return;
        const newsUl = document.querySelector('.news-feed');
        const newsHtml = engine(newsFeedItemTemplate(title));

        newsUl.insertAdjacentHTML('afterBegin', newsHtml);
    }

}