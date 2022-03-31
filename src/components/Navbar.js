import { React, useEffect, useState } from "react";
import nav_menu, { social_icons } from "./site-data";
import { AiOutlineMenu } from "react-icons/ai";
import "./navbar.css";

const Navbar = () => {
  const [stickyClass, setStickyClass] = useState("");

  useEffect(() => {
    window.addEventListener("scroll", stickyNavbar);

    return () => {
      window.removeEventListener("scroll", stickyNavbar);
    };
  }, []);

  const stickyNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 150 ? setStickyClass("sticky") : setStickyClass("");
    }
  };

  return (
    <div className={`no-container ${stickyClass}`}>
      <nav className="main-nav my-container">
        <div className="nav-logo">
          <a href={window.location.origin}>AK</a>
        </div>
        <ul className="nav-menu">
          {nav_menu.map((item) => {
            const { id, text, url } = item;
            return (
              <li key={id} className="nav-link">
                {/* <a
                  href={url}
                  className={isSelected[id - 1] ? "active" : ""}
                  onClick={() => handleSelect(id - 1)}
                > */}
                <a href={url}>{text}</a>
              </li>
            );
          })}
        </ul>
        <ul className="social-icons">
          {social_icons.map((platform) => {
            const { id, type, library, url } = platform;
            return (
              <li key={id} className={`${type}`}>
                <a href={url} rel="noreferrer noopener" target="_blank">
                  {library}
                </a>
              </li>
            );
          })}
        </ul>
        <AiOutlineMenu className="icons" />
      </nav>
    </div>
  );
};
export default Navbar;
