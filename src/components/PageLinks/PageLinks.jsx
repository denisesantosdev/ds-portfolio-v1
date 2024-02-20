import React from "react";

import { pageSectionsNames } from "../../data/pageSectionsNames";

const PageLinks = ({ setIsMenuHidden }) => {
  return (
    <ul>
      {pageSectionsNames.map((link) => {
        return (
          <li
            className="md:inline-block m-9 md:m-2 relative"
            key={link}>
            <a
              className="opacity-80 hover:text-primary hover:opacity-100 focus:text-primary focus:opacity-100 transition-all ease-out"
              href={`#${link}`}
              onClick={() => setIsMenuHidden(true)}>
                <span className="opacity-30">// </span>
                {link}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default PageLinks;
