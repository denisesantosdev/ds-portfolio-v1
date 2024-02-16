import React from "react";
import {SectionTitle} from '../components/components-index.js'

import {pageSectionsNames} from "../data/pageSectionsNames"

const About = () => {
  return (
    <section id={pageSectionsNames[0]}>
      <div className="">
        <SectionTitle text={pageSectionsNames[0]}/>
        
        <div className="flex flex-col-reverse md:flex-row gap-20">
          <img
            className="max-w-[300px] self-center"
            src="https://placehold.it/300"
            alt=""
          />

          <p className="relative self-start leading-relaxed opacity-65">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            accusamus iste tenetur, doloribus facere nam placeat! Error nihil
            nostrum quidem ipsa tempora praesentium, harum ut blanditiis itaque
            cum vel quam nam, accusantium assumenda impedit ad delectus deleniti
            quibusdam voluptates, ipsum laboriosam cumque qui! Architecto
            incidunt facere explicabo harum reprehenderit. Odio.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
