import React from "react";
import  icons  from "../../data/icons.jsx";

const SocialMediaLinks = () => {
  const socialMediaLinks = [
    {
    linkName: 'Github',
    link: 'https://github.com/denisesantosdev',
    linkIcon: <icons.github size={30}/>
  },
    {
    linkName: 'Linkedin',
    link: 'https://www.linkedin.com/in/denisesantosdev/',
    linkIcon: <icons.linkedin size={30}/>
  },

];

  return (
    <ul className="flex gap-5 place-content-center">
      {socialMediaLinks.map((item) => {
        return (
          <li
            className="inline-block hover:text-primary text-3xl"
            key={item.linkName}>
            <a href={item.link} target="_blank">{item.linkIcon}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialMediaLinks;
