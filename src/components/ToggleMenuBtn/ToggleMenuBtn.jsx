import React from "react";
import "./ToggleMenuBtn.css" 

import { FaBars, FaXmark } from "react-icons/fa6";

const ToggleMenuBtn = (props) => {
  return (
    <label className="btn btn-circle swap swap-rotate relative z-30 hover:text-primary md:hidden">
      <input
        type="checkbox"
        onChange={() => props.setIsMenuHidden((prev) => !prev)}
      />

      <FaBars className="swap-off fill-current text-2xl" />
      <FaXmark className="swap-on fill-current text-2xl" />
    </label>
  );
};

export default ToggleMenuBtn;
