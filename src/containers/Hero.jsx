import React from "react";
import { BtnPrimary, BtnSecondary } from "../components/components-index";
import icons from "../data/icons";

import { pageSectionsNames } from "../data/pageSectionsNames";
import laptopAnimation from "../assets/lottie-animations/laptop-opening.json";
import Lottie from "lottie-react";

import { delay, motion } from "framer-motion";

import { FadeInFromDownAnim, FadeIn } from "../animations/anim-index";

const Hero = () => {
  return (
    <section className="hero min-h-[70vh] bg-base-100">
      <div className="hero-content flex-col-reverse md:flex-row-reverse p-0 relative">
        {/* <img
          src="https://placehold.it/300x300"
          alt=""
          className="max-w-sm rounded-full "
        /> */}
        <div className="w-[350px] md:absolute md:w-[450px] lg:w-[550px] xl:w-[750px] -right-[100px] top-[0px] -z-10 md:opacity-75 lg:opacity-100">
          <FadeInFromDownAnim delay={0.4}>
            <Lottie
              autoplay
              animationData={laptopAnimation}
            />
          </FadeInFromDownAnim>
        </div>

        <FadeIn>
          <p className="text-primary mb-2">Olá mundo! Meu nome é</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-3 font-heading opacity-95">
              Denise Santos
            </h1>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-heading opacity-65">
              Desenvolvevora <nobr>front-end</nobr>
            </h2>
          <p className="py-9 md:max-w-[500px] leading-loose opacity-65">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <FadeIn delay={0.7} className="flex gap-5">
            <BtnPrimary
              text="Baixe meu CV!"
              icon={<icons.download />}
            />
            <BtnSecondary
              text="Veja meus projetos"
              icon={<icons.arrowRight />}
              url={`#${pageSectionsNames[1]}`}
            />
          </FadeIn>
        </FadeIn>
      </div>
    </section>
  );
};

export default Hero;
