//import './Header.css';
//import BurgerMenu from './burger_menu.js';
import { Link } from 'react-router-dom';
import * as Scroll from 'react-scroll';

import { CustomLink } from '../CustomLink';
import { ChangeTheme } from '../changeTheme';
import styles from './header.module.scss';

const scroll = Scroll.animateScroll;
export const scrollToTop = () => {
   scroll.scrollToTop();
};

const Header = () => {
   return (
      <header className={styles.header}>
         <div className={styles.container}>
            <div className={styles.row}>
               <div className={styles.logo}>
                  <Link to='/' onClick={scrollToTop}>
                     Офшоры <span>И</span> банки
                  </Link>
               </div>
               <div className={styles.menu}>
                  <div className={styles.item}>
                     <CustomLink
                        to='/dictionary'
                        className={styles.link}
                        onClick={scrollToTop}
                     >
                        Словарь
                     </CustomLink>
                  </div>
                  <div className={styles.item}>
                     <CustomLink
                        to='/stats'
                        className={styles.link}
                        onClick={scrollToTop}
                     >
                        Статистика
                     </CustomLink>
                  </div>
                  <div className={styles.item}>
                     <CustomLink
                        to='/tasks'
                        className={styles.link}
                        onClick={scrollToTop}
                     >
                        Цели и задачи
                     </CustomLink>
                  </div>
                  <div className={styles.item}>
                     <CustomLink
                        to='/team'
                        className={styles.link}
                        onClick={scrollToTop}
                     >
                        Команда
                     </CustomLink>
                  </div>
                  <div className={styles.item}>
                     <CustomLink
                        to='/sources'
                        className={styles.link}
                        onClick={scrollToTop}
                     >
                        Источники
                     </CustomLink>
                  </div>
                  <ChangeTheme />
               </div>
            </div>
         </div>
      </header>
   );
};

export { Header };
