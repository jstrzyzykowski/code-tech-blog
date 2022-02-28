import React from 'react'
import { NavLink } from 'react-router-dom';

import './signed-in-menu-item.styles.scss';

export default function SignedInMenuItem({button, pathURL, iconClass, title, description, handleClick}) {
  return(
    <li className="signedInMenuItem">
      {button ? (
        <button className="signedInMenuItem__button" onClick={handleClick}>
          <div className="signedInMenuItem__iconContainer">
            <i className={iconClass}></i>
          </div>
          <div className="signedInMenuItem__content">
            <p className="signedInMenuItem__content-title">{title}</p>
            <p className="signedInMenuItem__content-desc signedInMenuItem__content-desc--button">{description}</p>
          </div>
          <i className="fas fa-angle-right"></i>
        </button>
      ) : (
        <NavLink
          className="signedInMenuItem__link"
          exact
          to={pathURL}
          onClick={handleClick}
        >
          <div className="signedInMenuItem__iconContainer">
            <i className={iconClass}></i>
          </div>
          <div className="signedInMenuItem__content">
            <p className="signedInMenuItem__content-title">{title}</p>
            <p className="signedInMenuItem__content-desc">{description}</p>
          </div>
          <i className="fas fa-angle-right"></i>
        </NavLink>
      )}
    </li>
  );
}