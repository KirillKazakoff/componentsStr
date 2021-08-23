const newsFeedItemTemplate = (title, index) => ({
    block: 'li',
    cls: 'news-feed__item',
    content: title,
    attrs: {
        'data-id': index,
    },
})

const newsFeedTemplate = function(news) {
    return {
        block: 'ul',
        cls: 'news-feed',
        content: news.reverse().map(newsFeedItemTemplate),
    };
};

export { newsFeedTemplate, newsFeedItemTemplate };