import React, { useState } from "react";
import { SocialMediaLinks, PageLinks } from "../components/components-index.js";

const Header = () => {
  const [isMenuHidden, setIsMenuHidden] = useState(true);

  return (
    <header className="bg-base-100 flex justify-between relative">
      <a href="#" className="text-xl self-center">{"<DeniseSantos/>"}</a>

        <button
          className="sm:hidden"
          onClick={() => setIsMenuHidden((prev) => !prev)}>
          {isMenuHidden ? "Open menu" : "Close Menu"}
        </button>

        <nav
          className={
            isMenuHidden
              ? "hidden sm:block"
              : "absolute sm:static top-[100%] inset-0 text-center"
          }>
          
            <div className="bg-base-100 md:flex md:gap-5 align-middle">
              <PageLinks />
              <SocialMediaLinks />
            </div>
          
        </nav>
    </header>
  );
};

export default Header;
