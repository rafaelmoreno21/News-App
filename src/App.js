import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Form from './components/Form';
import ListNews from './components/ListNews';


function App() {

  const [category, saveCategory] = useState('');
  const [news, saveNews] = useState([]);

  useEffect(() => {
    const consultAPI = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=0bba3b3f975b414aa6042b99d57e5842`

      const response = await fetch(url);
      const news = await response.json();
      saveNews(news.articles);
    }
    consultAPI();
  }, [category])

  return (
    <Fragment>
      <Header
        title="News search engine"
      />
      <div className="container white">
        <Form
          saveCategory={saveCategory}
        />
        <ListNews
          news={news}
        />
      </div>
    </Fragment>
  );
}

export default App;
