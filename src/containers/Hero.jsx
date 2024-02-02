import React from "react";

const Hero = () => {
  return (
    <section className="hero min-h-screen bg-base-100 mt-10 md:mt-0">
      <div className="hero-content flex-col-reverse md:flex-row-reverse gap-16">
        <img
          src="https://placehold.it/300x300"
          alt=""
          className="max-w-sm rounded-full shadow-2xl"
        />
        <div>
          <p className="text-primary mb-2">Olá mundo! Meu nome é</p>
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-3">
            Denise Santos
          </h1>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
            Desenvolvevora front-end
          </h2>
          <p className="py-9 ">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <div className="flex gap-5">
            <button className="btn btn-primary md:btn-lg">Baixe meu CV</button>
            <button className="btn btn-link md:btn-lg no-underline">
              Veja meus projetos
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
