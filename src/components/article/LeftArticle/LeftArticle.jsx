import styles from './index.module.scss';
import { Link } from 'react-router-dom';

const LeftArticle = ({ article, sorted }) => {
  return (
    <div className={styles.container}>
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
      <div className={styles.articleInfo}>
        <div>
          <span className={styles.articleDate}>{article?.publishedAt}</span>
          <h1>{article?.title ? article.title : 'Article Name'}</h1>
        </div>
        <div className={styles.articleButtons}>
          <Link
            to={{
              pathname: `/article/${encodeURIComponent(article.title)}${
                sorted !== '' ? `&sorted=${sorted}` : ''
              }`,
            }}
          >
            <button>Enter</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LeftArticle;
