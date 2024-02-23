import React, { useState } from "react";

import {
  SectionTitle,
  BtnPrimary,
  BtnSecondary,
  TechBadge,
  FeaturedProjectCard,
} from "../components/components-index";

import icons from "../data/icons";

import { FeaturedProjectsData } from "../data/featuredProjectsData";
import {
  FadeInFromLeftAnim,
  FadeInFromRightAnim,
} from "../animations/anim-index";

import { pageSectionsNames } from "../data/pageSectionsNames";

const FeaturedProjects = () => {
  return (
    <section id={pageSectionsNames[1]}>
      <SectionTitle
        text={pageSectionsNames[1]}
        textAlign="text-right"
      />

      <div className="grid gap-24">
        {FeaturedProjectsData.map((project, index) => {
          if (index % 2 == 0) {
            return (
              <FadeInFromLeftAnim key={index}>
                <FeaturedProjectCard
                  project={project}
                  index={index}
                />
              </FadeInFromLeftAnim>
            );
          } else {
            return (
              <FadeInFromRightAnim key={index}>
                <FeaturedProjectCard
                  project={project}
                  index={index}
                />
              </FadeInFromRightAnim>
            );
          }
        })}
      </div>
    </section>
  );
};

export default FeaturedProjects;
