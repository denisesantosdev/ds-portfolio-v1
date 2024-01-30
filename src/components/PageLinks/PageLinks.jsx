import React from "react";

const PageLinks = () => {
  const links = ["Sobre mim", "Projetos", "Habilidades", "Contato"];

  return (
    <ul>
      {links.map((link) => {
        return (
          <li
            className="sm:inline-block m-2"
            key={link}>
            <a href={`#${link}`}>{link}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default PageLinks;
