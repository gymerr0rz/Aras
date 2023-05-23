import { useEffect, useState } from 'react';
import BigArticle from '../../components/article/BigArticle/BigArticle';
import Navbar from '../../components/navbar/Navbar';
import styles from './index.module.scss';
import axios from 'axios';
import LeftArticle from '../../components/article/LeftArticle/LeftArticle';
import SmallArticle from '../../components/article/SmallArticle/SmallArticle';
import Footer from '../../components/footer/Footer';
const API_KEY = 'NEWS_API_KEY'; // NEWS API KEY

const Home = () => {
  const [article, setArticle] = useState([]);
  const [sort, setSort] = useState('');

  const handleSort = (e) => {
    const value = e.target.value;
    axios
      .get(
        `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&sortBy=${value}&apiKey=${API_KEY}`
      )
      .then((res) => {
        setArticle(res.data.articles);
        setSort(value);
      })
      .catch((err) => console.log(err.response.data.message));
  };

  const handleRefresh = () => {
    axios
      .get(
        `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com${
          sort ? `&sortBy=${sort}` : ''
        }&apiKey=${API_KEY}`
      )
      .then((res) => {
        console.log(res);
        setArticle(res.data.articles);
      })
      .catch((err) => console.log(err.response.data.message));
  };

  useEffect(() => {
    axios
      .get(
        `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=${API_KEY}`
      )
      .then((res) => {
        console.log(res);
        setArticle(res.data.articles);
      })
      .catch((err) => console.log(err.response.data.message));
  }, []);

  return (
    <>
      <div className={styles.container}>
        <Navbar sortBy={handleSort} sort={true} refresh={handleRefresh} />
        <div className={styles.bigArticle}>
          {article.length >= 1 ? (
            <BigArticle article={article[0]} sorted={sort} />
          ) : null}
        </div>
        <div className={styles.leftArticle}>
          {article.length >= 1 ? (
            <LeftArticle article={article[1]} sorted={sort} />
          ) : null}
          {article.length >= 1 ? (
            <LeftArticle article={article[2]} sorted={sort} />
          ) : null}
          {article.length >= 1 ? (
            <LeftArticle article={article[3]} sorted={sort} />
          ) : null}
        </div>
        <div className={styles.smallArticle}>
          <div>
            {article.length >= 1 ? (
              <SmallArticle article={article[4]} sorted={sort} />
            ) : null}
            {article.length >= 1 ? (
              <SmallArticle article={article[5]} sorted={sort} />
            ) : null}
            {article.length >= 1 ? (
              <SmallArticle article={article[6]} sorted={sort} />
            ) : null}
            {article.length >= 1 ? (
              <SmallArticle article={article[7]} sorted={sort} />
            ) : null}
            {article.length >= 1 ? (
              <SmallArticle article={article[8]} sorted={sort} />
            ) : null}
          </div>
          <span className={styles.block}></span>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
