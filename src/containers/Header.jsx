import React, { useState } from "react";
import { SocialMediaLinks, PageLinks } from "../components/components-index.js";

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

      <label className="btn btn-circle swap swap-rotate relative z-30 md:hidden hover:text-primary">
        <input
          type="checkbox"
          onChange={() => setIsMenuHidden((prev) => !prev)}
        />

        <FaBars className="swap-off fill-current text-2xl" />
        <FaXmark className="swap-on fill-current text-2xl" />
      </label>

      <nav
        className={
          isMenuHidden
            ? "hidden md:block"
            : "bg-base-100 absolute top-0 right-0 w-[70%] md:w-fit h-full md:static z-20 shadow-2xl"
        }>
        <div className="md:flex md:gap-5 pt-20 md:pt-0 text-center md:place-items-center">
          <PageLinks />
          <SocialMediaLinks />
        </div>
      </nav>

      <div
        className={
          isMenuHidden
            ? "hidden"
            : "absolute inset-0 bg-base-300 opacity-75 md:hidden"
        }></div>
    </header>
  );
};

export default Header;
