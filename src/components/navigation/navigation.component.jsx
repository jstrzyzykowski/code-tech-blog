import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { hideMobileMenu, hideUserMenu, toggleMobileMenu } from '../../redux/menu/menu.actions';

import SignedInMenu from '../signed-in-menu/signed-in-menu.component';
import SignedOutMenu from '../signed-out-menu/signed-out-menu.component';

import GuildLogo from '../../assets/brand-logo-3.png';

import './navigation.styles.scss';

export default function Navigation() {
  const { currentUser } = useSelector((state) => state.user);
  const { mobileMenu, userMenu } = useSelector((state) => state.menu);
  const dispatch = useDispatch();

  const handleClick = () => {
    if(userMenu) dispatch(hideUserMenu());
    dispatch(toggleMobileMenu());
  }
  
  return (
    <div className="navigationWrapper">
      <nav className="navigation">
        <div className={`navigation__bars ${mobileMenu ? 'active' : ''}`} onClick={handleClick}>
          <div className="navigation__bars-wrapper">
            <div className="navigation__bars-bar" />
            <div className="navigation__bars-bar" />
            <div className="navigation__bars-bar" />
          </div>
        </div>
        <Link className="navigation__brand" to="/">
          {/*<div className="navigation__brand-imageWrapper">*/}
          {/*  <img src={GuildLogo} alt=""/>*/}
          {/*</div>*/}
          THE NINE
        </Link>
        <div className={`navigation__menu ${mobileMenu ? 'active' : ''}`}>
          <ul className="navigation__menu-list">
            <li className="navigation__menu-item">
              <NavLink className="navigation__menu-link" exact to="/" onClick={() => dispatch(hideMobileMenu())}>
                Home
              </NavLink>
            </li>
            <li className="navigation__menu-item">
              <NavLink className="navigation__menu-link" exact to="/about" onClick={() => dispatch(hideMobileMenu())}>
                About
              </NavLink>
            </li>
            <li className="navigation__menu-item">
              <NavLink className="navigation__menu-link" exact to="/members" onClick={() => dispatch(hideMobileMenu())}>
                Members
              </NavLink>
            </li>
            <li className="navigation__menu-item">
              {/*<NavLink className="navigation__menu-link" exact to="/apply" onClick={() => dispatch(hideMobileMenu())}>*/}
              {/*  APPLY*/}
              {/*</NavLink>*/}
              <p className="navigation__menu-link--soon">Apply</p>
            </li>
          </ul>
        </div>
        {currentUser ? <SignedInMenu /> : <SignedOutMenu />}
      </nav>
    </div>
  );
}
