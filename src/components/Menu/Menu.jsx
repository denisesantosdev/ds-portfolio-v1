import React from "react";
import { SocialMediaLinks, PageLinks } from "../components-index.js";

import "./Menu.css";

const Menu = ({ isMenuHidden }) => {

  if (!isMenuHidden) {
    document.body.classList.add("lock-scroll");
  } else {
    document.body.classList.remove("lock-scroll");
  }

  return (
    <>
      <nav
        className={
          isMenuHidden
            ? "mobile-menu md:block"
            : "mobile-menu slide-in bg-base-100"
        }>
        <div className="md:flex md:gap-5 pt-20 md:pt-0 text-center md:place-items-center">
          <PageLinks />
          <SocialMediaLinks />
        </div>
      </nav>
      <div
        className={
          isMenuHidden ? "overlay md:hidden" : "overlay fade-in bg-base-300"
        }></div>
    </>
  );
};

export default Menu;
