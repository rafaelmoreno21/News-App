import React from 'react';
import News from './News';
import PropTypes from 'prop-types';

const ListNews = ({ news }) => {
    return (
        <div className="row">
            {news.map(news1 => (
                <News
                    key={news1.url}
                    news1={news1}
                />
            ))}
        </div>
    );
};

ListNews.propTypes = {
    news: PropTypes.array.isRequired
}



export default ListNews;