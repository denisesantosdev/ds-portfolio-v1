import React from "react";
import { SectionTitle, SynthwaveSun } from "../components/components-index.js";

import { pageSectionsNames } from "../data/pageSectionsNames";
import {FadeInFromDownAnim} from '../animations/anim-index.js'

const About = () => {
  return (
    <section id={pageSectionsNames[0]}>
      <FadeInFromDownAnim delay={0.2}>
        <SectionTitle text={pageSectionsNames[0]} />

        <div className="flex flex-col-reverse md:flex-row gap-20">
          <div className="relative  self-center">
            <img
              className="max-w-[300px] rounded-full relative z-20 shadow-2xl"
              src="https://placehold.it/300"
              alt=""
            />
            <SynthwaveSun/>
          </div>

          <p className="relative self-start leading-relaxed opacity-65 text-decoration">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            accusamus iste tenetur, doloribus facere nam placeat! Error nihil
            nostrum quidem ipsa tempora praesentium, harum ut blanditiis itaque
            cum vel quam nam, accusantium assumenda impedit ad delectus deleniti
            quibusdam voluptates, ipsum laboriosam cumque qui! Architecto
            incidunt facere explicabo harum reprehenderit. Odio.
          </p>
        </div>
      </FadeInFromDownAnim>
    </section>
  );
};

export default About;
