import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { NAV_LINKS } from '../../constants';
import './Header.scss';

const Header = () => (
  <header className="header">
    <h1 className="hidden">SpaceX</h1>
    <div className="wrapper wrapper__header">
      <div className="logo-container">
        <img src={logo} alt="logo" className="logo" />  
      </div>
      <nav className="nav">
        <ul className="nav__list">
          {NAV_LINKS.map(({name, link}, id) => (
            <li key={id} className="nav__item">
              <Link to={link} className="nav__link">{name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
)

export default Header;