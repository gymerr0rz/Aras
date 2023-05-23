import styles from './index.module.scss';
import Sticker from '../../../assets/sticker.svg';
import Footer from '../../footer/Footer';
import ChevronLeft from '../../../assets/button-icons/chevronLeft.svg';
import ChevronRight from '../../../assets/button-icons/chevronRight.svg';

const DisplayArticle = ({ article, nextArticle, prevArticle }) => {
  return (
    <>
      <div className={styles.container}>
        <div>
          <p>{article.description ? article.description : null}</p>
        </div>
        <img src={Sticker} alt="Sticker" className={styles.topSticker} />
        <div className={styles.articleInfo}>
          <h1>{article?.title ? article.title : 'Article Name'}</h1>
          <div className={styles.articleButtons}>
            <button>Kategorija</button>
            <button>Vrijeme Citanja 5 Min</button>
          </div>
          <span className={styles.articleDate}>{article?.publishedAt}</span>
        </div>
        {article.urlToImage ? (
          <img
            src={article?.urlToImage}
            alt="Article Image"
            className={styles.article}
          />
        ) : (
          <span className={styles.article}></span>
        )}
        <div>{article.content ? article.content : null}</div>
        <img src={Sticker} alt="Sticker" className={styles.sticker} />
      </div>
      <div className={styles.showArticle}>
        <h1>Share</h1>
        <button onClick={prevArticle}>
          <img src={ChevronLeft} alt="" />
        </button>
        <button onClick={nextArticle}>
          <img src={ChevronRight} alt="" />
        </button>
        <Footer />
      </div>
    </>
  );
};

export default DisplayArticle;
