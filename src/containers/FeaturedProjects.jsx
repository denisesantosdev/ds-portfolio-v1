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

const FeaturedProjects = () => {
  return (
    <section id="projetos">
      <SectionTitle
        text="Projetos"
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
