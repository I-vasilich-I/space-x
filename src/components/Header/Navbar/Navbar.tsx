import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../../../constants';
import './Navbar.scss';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navListClass = isOpen ? 'nav__list nav__list--open' : 'nav__list';
  const burgerClass = isOpen ? 'nav__burger nav__burger--open' : 'nav__burger';

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  }

  const handleClose = () => {
    setIsOpen(false);
  }

  const handleOutSideClick = (e: any) => {
    if (e.target.closest('.nav')) {
      return;
    }

    setIsOpen(false);
  }

  useEffect(() => {
    document.addEventListener('click', handleOutSideClick)
    return () => document.removeEventListener('click', handleOutSideClick);
  }, []);

  return (
    <nav className="nav">
      <div className={burgerClass} onClick={handleClick}>
        <span></span>
      </div>
      <ul className={navListClass}>
        {NAV_LINKS.map(({name, link}, id) => (
          <li key={id} className="nav__item">
            <Link onClick={handleClose} to={link} className="nav__link">{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar;