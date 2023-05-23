import { useParams } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import styles from './index.module.scss';
import { useEffect, useState } from 'react';
import axios from 'axios';
import DisplayArticle from '../../components/article/DisplayArticle/DisplayArticle';
const API_KEY = 'NEWS_API_KEY'; // NEWS API KEY

const Article = () => {
  const [article, setArticle] = useState();
  const [originalArtical, setOriginalArtical] = useState([]);
  const { title } = useParams(null);
  const decodeTitle = decodeURIComponent(title);
  const sorted = decodeTitle.includes('&sorted=')
    ? decodeTitle.split('&sorted=')[1]
    : '';
  let titleifSorted;
  if (sorted !== '') titleifSorted = decodeTitle.split('&sorted=')[0];

  const nextArticle = () => {
    // TO-DO
  };

  const prevArticle = () => {
    // TO-DO
  };

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com${
          sorted ? `&sortBy=${sorted}` : ''
        }&apiKey=${API_KEY}`
      )
      .then(async (res) => {
        const resArticle = res.data.articles;
        setArticle(resArticle);

        const openedArticle = await resArticle.filter((article) =>
          titleifSorted !== undefined
            ? titleifSorted
            : decodeTitle === article.title
        );

        if (openedArticle.length > 1) {
          const articleSearch = await resArticle.filter(
            (article) => titleifSorted === article.title
          );
          return setOriginalArtical(...articleSearch);
        }

        setOriginalArtical(...openedArticle);
      })
      .catch((err) => console.log(err.response.data.message));
  }, []);

  return (
    <div className={styles.container}>
      <Navbar sort={false} />
      {originalArtical ? (
        <DisplayArticle
          article={originalArtical}
          nextArticle={nextArticle}
          prevArticle={prevArticle}
        />
      ) : (
        <div>Article not found!</div>
      )}
    </div>
  );
};

export default Article;
