import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';


function Header() {
  return (
    <header className={ styles.header }>
      <nav className={ styles.menu }>
        <ul className={ styles.menuList }>

          <li className={ styles.menuListItem }>
            <NavLink exact to='/' className={ styles.menuListLink } activeClassName={ styles.menuListLinkActive }>Главная</NavLink>
          </li>
          <li className={ styles.menuListItem }>
            <NavLink exact to='/news' className={ styles.menuListLink } activeClassName={ styles.menuListLinkActive }>Новости</NavLink>
          </li>
          <li className={ styles.menuListItem }>
            <NavLink exact to='/profile' className={ styles.menuListLink } activeClassName={ styles.menuListLinkActive }>Профиль</NavLink>
          </li>

        </ul>
      </nav>
    </header>
  );
}

export default Header;