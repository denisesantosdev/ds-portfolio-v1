import React from "react";
import {
  SectionTitle,
  BtnPrimary,
  BtnSecondary,
  TechBadge,
} from "../components/components-index";

import icons from "../data/icons"

const FeaturedProjects = () => { 
  return (
    <section id="projetos">
      <SectionTitle text="Projetos" textAlign="text-right"/>

      <div className="grid gap-24">
        <article className="md:h-[560px] ">
          <header>
            <h3 className="mb-1 opacity-65">_projeto-1</h3>
            <h4 className="text-2xl mb-7 text-primary">_github-account-overview</h4>
          </header>
          <main className="sm:grid md:grid-cols-[2fr,1fr] relative">
            <img
              className="mb-7 rounded-md sm:justify-self-center"
              src="https://placehold.it/560x350"
              alt=""
            />
            <div className="grid gap-7 md:absolute right-0 top-16 md:w-[500px] md:justify-items-end">
            <p className="md:bg-neutral md:p-5 md:rounded-md md:bg-opacity-60 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
                neque voluptate maiores consequatur totam ea, voluptas dolorum eos
                sint ab?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
                neque voluptate maiores consequatur totam ea, voluptas dolorum eos
                sint ab?
              </p>
              <ul className="inline-flex gap-4 flex-wrap md:order-[-1] md:justify-end">
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
                  icon={<icons.outsideLink/>}
                />
                <BtnSecondary
                  text="Código"
                  url="#"
                  icon={<icons.arrowRight/>}
                />
              </div>
            </div>
          </main>
        </article>
        <article className="md:h-[560px]">
          <header className="text-right">
            <h3 className="mb-1 opacity-65">_projeto-1</h3>
            <h4 className="text-2xl mb-7 text-primary">_github-account-overview</h4>
          </header>
          <main className="sm:grid md:grid-cols-[2fr,1fr] relative">
            <img
              className="mb-7 rounded-md sm:justify-self-center md:absolute right-0"
              src="https://placehold.it/560x350"
              alt=""
            />
            <div className="grid gap-7 md:absolute left-0 top-16 md:w-[500px] md:justify-items-start">
            <p className="md:bg-neutral md:p-5 md:rounded-md md:bg-opacity-60 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
                neque voluptate maiores consequatur totam ea, voluptas dolorum eos
                sint ab?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
                neque voluptate maiores consequatur totam ea, voluptas dolorum eos
                sint ab?
              </p>
              <ul className="inline-flex gap-4 flex-wrap md:order-[-1] md:justify-start">
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
        </article>

        
      </div>
    </section>
  );
};

export default FeaturedProjects;
