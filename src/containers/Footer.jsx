import React from "react";
import {Logo} from "../components/components-index"
const Footer = () => {
  return (
    <footer className="footer footer-center p-10">
      <aside>
        <Logo/>
        <p className="font-bold">
          Denise Santos <br />
          Resolvendo bugs desde 1992
        </p>
        <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" className="link link-hover">
          <p>CC 2024 - Attribution-NonCommercial-ShareAlike</p>
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
