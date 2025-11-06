import './Header.scss';
import AlterLogo from './../../img/alter-logo.avif';
import HamburgerMenu from '../../img/hamburger-menu.svg';

type Props = {
  isSidebarOpen: boolean;
  setSidebarOpen: (isSidebarOpen: boolean) => void;
};

export const Header: React.FC<Props> = ({ isSidebarOpen, setSidebarOpen }) => {
  return (
    <header className="header">
      <div className="container container--small">
        <div className="header__wrapper">
          <div className="header__logo">
            <img src={AlterLogo} alt="site-logo" />
          </div>
          <div className="header__menu">
            <nav className="menu">
              <ul className="menu__list">
                <li className="menu__item">
                  <a href="#">About</a>
                </li>
                <li className="menu__item">
                  <a href="#">Features</a>
                </li>
                <li className="menu__item">
                  <a href="#">Pages</a>
                </li>
                <li className="menu__item">
                  <a href="#">Pricing</a>
                </li>
                <li className="menu__item">
                  <a href="#">Blog</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header__btn">
            <a href="#">Contact us</a>
          </div>
          <div className="header__burger" onClick={() => setSidebarOpen(!isSidebarOpen)}>
            <img src={HamburgerMenu} alt="menu-toggler" />
          </div>
        </div>
      </div>
    </header>
  );
};