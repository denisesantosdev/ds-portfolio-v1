import React from "react";
import { BtnPrimary, BtnSecondary } from "../components/components-index";
import  icons  from "../data/icons";

const Hero = () => {
  return (
    <section className="hero min-h-[70vh] bg-base-100">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse gap-16 p-0">
        <img
          src="https://placehold.it/300x300"
          alt=""
          className="max-w-sm rounded-full shadow-2xl"
        />
        <div>
          <p className="text-primary mb-2">Olá mundo! Meu nome é</p>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-3 font-heading">
            Denise Santos
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-heading opacity-65">
            Desenvolvevora <nobr>front-end</nobr>
          </h2>
          <p className="py-9 md:max-w-[500px] leading-loose opacity-65">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <div className="flex gap-5">
            <BtnPrimary
              text="Baixe meu CV!"
              icon={<icons.download />}
            />
            <BtnSecondary
              text="Veja meus projetos"
              icon={<icons.arrowRight />}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
