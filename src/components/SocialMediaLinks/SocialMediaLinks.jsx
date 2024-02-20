import React from "react";
import icons from "../../data/icons.jsx";

const SocialMediaLinks = () => {
  const socialMediaLinks = [
    {
      linkName: "Github",
      link: "https://github.com/denisesantosdev",
      linkIcon: <icons.github size={30} />,
    },
    {
      linkName: "Linkedin",
      link: "https://www.linkedin.com/in/denisesantosdev/",
      linkIcon: <icons.linkedin size={30} />,
    },
  ];

  return (
    <ul className="flex gap-5 place-content-center">
      {socialMediaLinks.map((item) => {
        return (
          <li
            className="inline-block opacity-80 hover:text-primary hover:opacity-100 focus:text-primary focus:opacity-100 text-3xl transition-all ease-out"
            key={item.linkName}>
            <a
              href={item.link}
              target="_blank">
              {item.linkIcon}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialMediaLinks;
