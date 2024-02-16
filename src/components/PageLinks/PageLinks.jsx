import React from "react";

import { pageSectionsNames } from "../../data/pageSectionsNames";

const PageLinks = ({ setIsMenuHidden }) => {
  return (
    <ul>
      {pageSectionsNames.map((link) => {
        return (
          <li
            className="md:inline-block m-9 md:m-2 hover:text-primary"
            key={link}>
            <a
              href={`#${link}`}
              onClick={() => setIsMenuHidden(true)}>
              {link}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default PageLinks;
