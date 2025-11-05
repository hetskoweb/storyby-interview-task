import './Sidebar.scss';

type Props = {
  open: boolean;
};

export const Sidebar: React.FC<Props> = ({ open }) => {
  return (
    <aside className={`sidebar ${open ? 'sidebar--open' : ''}`}>
      <div className="sidebar__wrapper">
        <nav className="sidebar__nav menu">
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
    </aside>
  );
};