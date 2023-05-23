import styles from './index.module.scss';
import twitter from '../../assets/button-icons/twitter.svg';
import youtube from '../../assets/button-icons/youtube.svg';
import facebook from '../../assets/button-icons/facebook.svg';
import google from '../../assets/button-icons/google.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.socialLinks}>
        <img src={twitter} alt="" />
        <img src={google} alt="" />
        <img src={facebook} alt="" />
        <img src={youtube} alt="" />
      </div>
      <div className={styles.links}>
        <span>@2022 infozona.hr</span>
        <a href="#">Impressum</a>
        <a href="#">Pravila koristenja</a>
        <a href="#">Kontakt</a>
      </div>
    </footer>
  );
};

export default Footer;
