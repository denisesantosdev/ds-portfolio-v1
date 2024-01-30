import React from "react";

const PageLinks = () => {
  const links = ["Sobre mim", "Projetos", "Habilidades", "Contato"];

  return (
    <ul>
      {links.map((link) => {
        return (
          <li
            className="md:inline-block m-9 md:m-2 hover:text-primary"
            key={link}>
            <a href={`#${link}`}>{link}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default PageLinks;
