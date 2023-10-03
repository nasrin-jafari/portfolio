import React, { useState } from "react";
import "./styles.scss";

import { HiX } from "react-icons/hi";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import { navItems } from "../../data/data";
const NavBar = () => {
  const [toggleIcon, setToggleIcon] = useState(false);
  const hendleToggleIcon = () => {
    setToggleIcon(!toggleIcon);
  };
  return (
    <>
      <nav className="navbar">
        <div className="navbar__container">
          <Link to="/" className="navbar__container__logo link">
            <p
              style={{
                fontSize: "24px",
              }}
            >
              nasrin jafari
            </p>
          </Link>
        </div>
        <ul className={`navbar__container__menu`}>
          {navItems.map((item) => (
            <li className="navbar__container__menu__item" key={item.id}>
              <Link
                className="navbar__container__menu__item__links"
                to={item.link}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="nav-icon" onClick={hendleToggleIcon}>
          {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
        </div>
      </nav>
      <ul className={`overlay__container__menu ${toggleIcon ? "active" : ""}`}>
        {navItems.map((item) => (
          <li
            className="overlay__container__menu__item"
            key={item.id}
            onClick={hendleToggleIcon}
          >
            <Link
              className="overlay__container__menu__item__links"
              to={item.link}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default NavBar;
