import styles from './index.module.scss';
import logo from '../../assets/izlogo.svg';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import NavMenu from '../../assets/casual-icons/mobilenav.svg';
import Menu from '../menu/Menu';

const Navbar = ({ sortBy, sort, refresh }) => {
  const [defaultLocation, setLocation] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const location = window.location.pathname;
    if (location === '/') setLocation(true);
  }, []);

  const closeMenu = () => setOpenMenu(false);

  return (
    <>
      {openMenu && <Menu closeMenu={closeMenu} />}
      <div className={styles.container}>
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <div className={styles.menu} onClick={() => setOpenMenu(true)}>
          <img src={NavMenu} alt="menu" />
        </div>
        <div className={styles.navbarButtons} onChange={sortBy}>
          <button onClick={refresh}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 2v6h6"></path>
              <path d="M21 12A9 9 0 0 0 6 5.3L3 8"></path>
              <path d="M21 22v-6h-6"></path>
              <path d="M3 12a9 9 0 0 0 15 6.7l3-2.7"></path>
            </svg>
          </button>
          {sort ? (
            <select>
              <option value="publishedAt" defaultValue>
                Najnoviji
              </option>
              <option value="popularity">Popularni</option>
            </select>
          ) : null}
          <button
            id="homeBtn"
            style={
              defaultLocation
                ? { backgroundColor: '#191919', color: '#fff' }
                : null
            }
          >
            POČETNA
          </button>
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
      <div className={styles.showcaseLinks}>
        <span id="showcaseLinks">
          <a>Uđi u Građanski inkubator</a>
          <a>Kreće treća sezona podcasta u zoni!</a>
          <a>Serija radionica u Klubu Zona</a>
          <a>Prijavi se na Split Shapers Day!</a>
          <a>Podcasti u Zoni</a>
        </span>
      </div>
    </>
  );
};

export default Navbar;
