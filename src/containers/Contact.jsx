import React from "react";
import {
  SectionTitle,
  SocialMediaLinks,
  ContactForm,
} from "../components/components-index";

import { pageSectionsNames } from "../data/pageSectionsNames";

import { FadeInFromDownAnim } from "../animations/anim-index";

const Contact = () => {
  return (
    <section id={pageSectionsNames[3]}>
      <FadeInFromDownAnim delay={0.2}>
        <div className="mb-12">
          <SectionTitle
            text={pageSectionsNames[3]}
            textAlign="text-center"
            subtitleText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, vel."
          />
          <SocialMediaLinks />
        </div>

        <div>
          <ContactForm />
        </div>
      </FadeInFromDownAnim>
    </section>
  );
};

export default Contact;
