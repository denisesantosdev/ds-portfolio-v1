import React from "react";
import { SectionTitle, SocialMediaLinks } from "../components/components-index";

import { pageSectionsNames } from "../data/pageSectionsNames";

import { FadeInFromDownAnim } from "../animations/anim-index";

import icons from "../data/icons";

import { useForm } from "@formspree/react";

const Contact = () => {
  const [state, handleSubmit, reset] = useForm("meqylnqb");

  console.log(state);

  if (state.succeeded) {
    return <p>Obrigado! Em breve entrarei em contato!</p>;
  }
  
  if(state.errors !== null) {
    return <p>Opa. Algo deu errado 🤔</p>;
    
  }

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
          <form onSubmit={handleSubmit} className="grid max-w-[500px] m-auto gap-5 ">
            <div>
              <label htmlFor="nome">Seu nome</label>
              <input
                id="nome"
                type="text"
                name="nome"
                className="input input-secondary w-full text-sm"
                required
              />
            </div>
            <div>
              <label htmlFor="email">Seu email</label>
              <input
                id="email"
                type="email"
                name="email"
                className="input input-secondary w-full text-sm"
                required
              />
            </div>
            <div>
              <label
                htmlFor="mensagem">
                Sua mensagem
              </label>
              <textarea
                name="mensagem"
                id="mensagem"
                cols="30"
                rows="10"
                placeholder="Diga Olá!"
                className="textarea textarea-secondary resize-none w-full text-sm" required></textarea>
            </div>
            <button
              type="submit"
              disabled={state.submitting}
              className="btn btn-primary h-fit min-h-fit justify-self-center px-8 py-4">
              <icons.send size={35} />
            </button>
          </form>

          {/* <form
            action=""
            className="grid max-w-[500px] m-auto gap-5 ">
            <div>
              <label
                htmlFor=""
                className="hidden">
                Seu nome
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Seu nome"
                className="input input-secondary w-full text-sm"
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="hidden">
                Seu email
              </label>
              <input
                type="text"
                name=""
                id=""
                placeholder="Seu email"
                className="input input-secondary w-full text-sm"
              />
            </div>
            <div>
              <label
                htmlFor=""
                className="hidden">
                Sua mensagem
              </label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="Diga Olá!"
                className="textarea textarea-secondary resize-none w-full text-sm"></textarea>
            </div>
            <button className="btn btn-primary h-fit min-h-fit justify-self-center px-8 py-4">
              <icons.send size={35} />
            </button>
          </form> */}
        </div>
      </FadeInFromDownAnim>
    </section>
  );
};

export default Contact;
