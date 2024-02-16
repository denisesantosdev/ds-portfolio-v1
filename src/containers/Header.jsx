import React, { useState } from "react";

import {Menu, ToggleMenuBtn, Logo} from "../components/components-index"

const Header = () => {
  const [isMenuHidden, setIsMenuHidden] = useState(true);

  return (
    <header className="p-5 bg-base-100 flex justify-between">
      <Logo/>

      <ToggleMenuBtn setIsMenuHidden={setIsMenuHidden}/>

      <Menu isMenuHidden={isMenuHidden} setIsMenuHidden={setIsMenuHidden}/>
    </header>
  );
};

export default Header;
