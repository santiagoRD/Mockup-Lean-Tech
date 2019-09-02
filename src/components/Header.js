import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.PNG";
import "../styles/Header.css";
import "../fonts/style.css";

const Header = () => {
  return (
    <nav className="header__navbar">
      <NavLink to="/home" activeClassName="logo-active">
        <img className="header__logo" src={logo} alt="Logo" />
      </NavLink>
      <div className="header__container">
        <NavLink className="header__link" to="/home" activeClassName="active">
          <span className="icon-home"></span>
          <span className="header__link-text">Home</span>
        </NavLink>
        <NavLink
          className="header__link"
          to="/messages"
          activeClassName="active"
        >
          <span className="icon-mail2"></span>
          <span className="header__link-text">Messages</span>
        </NavLink>
        <NavLink
          className="header__link"
          to="/wishlist"
          activeClassName="active"
        >
          <span className="icon-star-empty"></span>
          <span className="header__link-text">Wishlist</span>
        </NavLink>
        <NavLink
          className="header__link"
          to="/settings"
          activeClassName="active"
        >
          <span className="icon-cog"></span>
          <span className="header__link-text">Settings</span>
        </NavLink>
        <NavLink
          className="header__link"
          to="/account"
          activeClassName="active"
        >
          <span className="icon-user"></span>
          <span className="header__link-text">My Account</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
