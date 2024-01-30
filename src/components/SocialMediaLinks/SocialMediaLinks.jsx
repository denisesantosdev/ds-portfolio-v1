import React from "react";

const SocialMediaLinks = () => {
  const socialMediaLinks = ["Github", "Linkedin"];

  return (
    <ul>
      {socialMediaLinks.map((link) => {
        return (
          <li
            className="inline-block m-2"
            key={link}>
            <a href="#">{link}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default SocialMediaLinks;
