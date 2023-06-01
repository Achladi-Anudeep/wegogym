import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const closeMobileMenu = () => {
    setMobileMenu(false);
  };
  return (
    <nav>
      <div className="logo">
        <h1>
          <NavLink onClick={closeMobileMenu} to="/">
            WEGOGYM
          </NavLink>
        </h1>
      </div>
      <ul className={mobileMenu ? "nav-links nav-links-mobile" : "nav-links"}>
        <li>
          <NavLink to="classes" onClick={closeMobileMenu}>
            CLASSES
          </NavLink>
        </li>
        <li>
          <NavLink to="membership" onClick={closeMobileMenu}>
            MEMBERSHIP
          </NavLink>
        </li>
        <li>
          <NavLink to="personal-training" onClick={closeMobileMenu}>
            PERSONAL TRAINING
          </NavLink>
        </li>
        <li>
          <NavLink to="nutrion-counseling" onClick={closeMobileMenu}>
            NUTRITION COUNSELING
          </NavLink>
        </li>
        <li>
          <NavLink to="offers" onClick={closeMobileMenu}>
            OFFERS
          </NavLink>
        </li>
        <li>
          <NavLink to="careers" onClick={closeMobileMenu}>
            CAREERS
          </NavLink>
        </li>
        <li>
          <NavLink to="location" onClick={closeMobileMenu}>
            LOCATION
          </NavLink>
        </li>
      </ul>
      <button className="mobile-btn" onClick={() => setMobileMenu(!mobileMenu)}>
        {mobileMenu ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>
    </nav>
  );
};

export default Navbar;
