import React from "react";
import {
  SectionTitle,
  BtnPrimary,
  BtnSecondary,
  TechBadge,
} from "../components/components-index";

const FeaturedProjects = () => { 
  return (
    <section id="projetos">
      <SectionTitle text="Projetos" textAlign="text-right"/>

      <header>
        <h3 className="mb-1">_projeto-1</h3>
        <h4 className="text-2xl mb-7">_github-account-overview</h4>
      </header>

      <main>
        <img
          className="mb-7 rounded-md"
          src="https://placehold.it/560x350"
          alt=""
        />

        <div className="grid gap-7">
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
            neque voluptate maiores consequatur totam ea, voluptas dolorum eos
            sint ab?
          </p>
          
          <ul className="inline-flex gap-5 flex-wrap">
            <TechBadge
              toolTip="Linguagem de programação"
              text="Javascript"
              badgeStyle="badge-neutral"
            />
            <TechBadge
              toolTip="Linguagem de programação"
              text="Javascript"
              badgeStyle="badge-neutral"
            />
            <TechBadge
              toolTip="Linguagem de programação"
              text="Javascript"
              badgeStyle="badge-neutral"
            />
            <TechBadge
              toolTip="Linguagem de programação"
              text="Javascript"
              badgeStyle="badge-neutral"
            />
            <TechBadge
              toolTip="Linguagem de programação"
              text="Javascript"
              badgeStyle="badge-neutral"
            />
            <TechBadge
              toolTip="Linguagem de programação"
              text="Javascript"
              badgeStyle="badge-neutral"
            />
            <TechBadge
              toolTip="Linguagem de programação"
              text="Javascript"
              badgeStyle="badge-neutral"
            />
          </ul>

          <div className="flex gap-5 justify-center">
            <BtnPrimary
              text="Visitar"
              url="#"
            />
            <BtnSecondary
              text="Código"
              url="#"
            />
          </div>
        </div>
      </main>
    </section>
  );
};

export default FeaturedProjects;
