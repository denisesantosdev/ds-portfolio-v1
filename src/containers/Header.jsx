import React, { useState } from "react";
import { SocialMediaLinks, PageLinks } from "../components/components-index.js";

import ToggleMenuBtn from "../components/ToggleMenuBtn/ToggleMenuBtn.jsx";

import { FaBars, FaXmark } from "react-icons/fa6";

const Header = () => {
  const [isMenuHidden, setIsMenuHidden] = useState(true);

  return (
    <header className="p-5 bg-base-100 flex justify-between">
      <a
        href="#"
        className="text-2xl self-center hover:text-primary ">
        {"<DS/>"}
      </a>

      <ToggleMenuBtn setIsMenuHidden={setIsMenuHidden}/>

      <nav
        className={
          isMenuHidden ? "mobile-menu" : "mobile-menu slide-in bg-base-100"
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
    </header>
  );
};

export default Header;
