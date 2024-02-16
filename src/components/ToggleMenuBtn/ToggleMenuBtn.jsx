import React from "react";

import icons from "../../data/icons"

const ToggleMenuBtn = (props) => {
  return (
    <label className="btn btn-circle swap swap-rotate relative z-30 hover:text-primary md:hidden">
      <input
        type="checkbox"
        checked={!props.isMenuHidden}
        onChange={() => props.setIsMenuHidden((prev) => !prev)}
      />

      <icons.menu size={40} className="swap-off fill-current text-2xl mt-1" />
      <icons.close size={40} className="swap-on fill-current text-2xl" />
    </label>
  );
};

export default ToggleMenuBtn;
