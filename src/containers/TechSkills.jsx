import React from "react";
import { SectionTitle, TechBadge } from "../components/components-index";

import { techData } from "../data/tech";

const TechSkills = () => {
  return (
    <section id="techSkills">
      <SectionTitle
        text="Tecnologias"
        subtitleText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, fugit?"
      />
      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 place-items-center max-w-2xl m-auto">
        {techData.map((item, index) => {
          return (
            <TechBadge
              key={index}
              text={item.name}
              icon={<item.icon size={45} />}
              toolTip={item.description}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default TechSkills;
