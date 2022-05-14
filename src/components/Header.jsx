//import './Header.css';
//import BurgerMenu from './burger_menu.js';

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__row">
          <div className="header__logo">
            икнаб <span>И</span> ырошфО
          </div>
          <div className="header__menu">
            <div className="menu__item">
              <a href="#">статистика</a>
            </div>
            <div className="menu__item">
              <a href="#">источники</a>
            </div>
            <div className="menu__item">
              <a href="#">команда</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
