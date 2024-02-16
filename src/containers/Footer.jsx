import React from "react";
import { Logo } from "../components/components-index";
import icons from "../data/icons";

const Footer = () => {
  return (
    <footer className="footer footer-center p-10">
      <aside className="opacity-65">
        <Logo />
        <p className="font-bold">
          Denise Santos <br />
          Resolvendo bugs desde 1992
        </p>
        <a
          href="https://creativecommons.org/licenses/by-nc-sa/4.0/"
          target="_blank"
          className="link link-hover">
            <p>
              <span className="inline-block">
                <icons.cc />
              </span>{" "}
              2024 - Attribution-NonCommercial-ShareAlike
            </p>
        </a>
      </aside>
    </footer>
  );
};

export default Footer;
