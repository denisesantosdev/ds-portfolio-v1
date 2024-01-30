import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

const SocialMediaLinks = () => {
  const socialMediaLinks = [
    {
    linkName: 'Github',
    link: 'https://github.com/denisesantosdev',
    linkIcon: <FaGithub/>
  },
    {
    linkName: 'Linkedin',
    link: 'https://www.linkedin.com/in/denisesantosdev/',
    linkIcon: <FaLinkedin/>
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
