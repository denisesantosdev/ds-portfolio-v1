import React from "react";
import { SectionTitle, TechBadge } from "../components/components-index";

import { techData } from "../data/tech";

import { pageSectionsNames } from "../data/pageSectionsNames";
import { motion } from "framer-motion";
import { FadeInFromDownAnim } from "../animations/anim-index";

const TechSkills = () => {
  return (
    <section id={pageSectionsNames[2]}>
      <SectionTitle
        text={pageSectionsNames[2]}
        subtitleText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, fugit?"
      />
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 place-items-center max-w-2xl m-auto">
        {techData.map((item, index) => {
          return (
            <FadeInFromDownAnim
              delay={index * 0.2}
              key={index}>
              <TechBadge
                text={item.name}
                icon={<item.icon size={45} />}
                toolTip={item.description}
              />
            </FadeInFromDownAnim>
          );
        })}
      </ul>
    </section>
  );
};

export default TechSkills;
