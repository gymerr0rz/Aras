import styles from './index.module.scss';
import MenuLogo from '../../assets/mobileLogo.svg';
import CloseMenu from '../../assets/casual-icons/closemobile.svg';
import Footer from '../footer/Footer';

const Menu = ({ closeMenu }) => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <div className={styles.top}>
          <img src={MenuLogo} alt="MenuLogo" />
          <img
            src={CloseMenu}
            alt="CloseMenu"
            style={{ cursor: 'pointer' }}
            onClick={closeMenu}
          />
        </div>
        <div className={styles.navbarButtons}>
          <button id="homeBtn">POČETNA</button>
          <button>
            Kalendar
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 0V12H12V6H10.6667V10.6667H1.33333V1.33333H6V0H0ZM7.33333 0V1.33333H9.72396L3.52865 7.52865L4.47135 8.47135L10.6667 2.27604V4.66667H12V0H7.33333Z"
                fill="#191919"
              />
            </svg>
          </button>
          <button>O Nama</button>
        </div>
      </div>
      <Footer className={styles.footer} />
    </div>
  );
};

export default Menu;
