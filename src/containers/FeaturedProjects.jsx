import React from "react";

import {
  SectionTitle,
  BtnPrimary,
  BtnSecondary,
  TechBadge,
  FeaturedProjectCard,
} from "../components/components-index";

import icons from "../data/icons";

import { FeaturedProjectsData } from "../data/featuredProjectsData";

import {pageSectionsNames} from "../data/pageSectionsNames"


const FeaturedProjects = () => {
  return (
    <section id={pageSectionsNames[1]}>
      <SectionTitle
        text={pageSectionsNames[1]}
        textAlign="text-right"
      />

      <div className="grid gap-24">
        {FeaturedProjectsData.map((project, index) => {
          return (
            <FeaturedProjectCard
              key={index}
              project={project}
              index={index}
            />
          );
        })}
      </div>
    </section>
  );
};

export default FeaturedProjects;
