import styles from './index.module.scss';
import { Link } from 'react-router-dom';

const BigArticle = ({ article, sorted }) => {
  return (
    <div className={styles.container}>
      <div className={styles.articleInfo}>
        <h1>
          {article?.title ? (
            <Link
              to={{
                pathname: `/article/${encodeURIComponent(article.title)}${
                  sorted !== '' ? `&sorted=${sorted}` : ''
                }`,
              }}
            >
              {article.title}
            </Link>
          ) : (
            'Article Name'
          )}
        </h1>
        <div className={styles.articleButtons}>
          <button>Kategorija</button>
          <button>Vrijeme Citanja 5 Min</button>
        </div>
        <span className={styles.articleDate}>{article?.publishedAt}</span>
      </div>
      {article.urlToImage ? (
        <Link
          to={{
            pathname: `/article/${encodeURIComponent(article.title)}${
              sorted !== '' ? `&sorted=${sorted}` : ''
            }`,
          }}
        >
          <img
            src={article?.urlToImage}
            alt="Article Image"
            className={styles.article}
          />
        </Link>
      ) : (
        <span className={styles.article}></span>
      )}
    </div>
  );
};

export default BigArticle;
