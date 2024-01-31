import React, { useState } from "react";

import {Menu, ToggleMenuBtn} from "../components/components-index"

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

      <Menu isMenuHidden={isMenuHidden}/>
    </header>
  );
};

export default Header;
