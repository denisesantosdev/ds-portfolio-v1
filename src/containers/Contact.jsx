import React from "react";
import { SectionTitle, SocialMediaLinks } from "../components/components-index";

import { pageSectionsNames } from "../data/pageSectionsNames";

import icons from "../data/icons"
import Lottie from "lottie-react";

const Contact = () => {
  return (
    <section id={pageSectionsNames[3]}>
      <div className="mb-12">
        <SectionTitle
          text={pageSectionsNames[3]}
          textAlign="text-center"
          subtitleText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, vel."
        />
        <SocialMediaLinks />
      </div>

      <div>
        <form
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
            <icons.send size={35}/>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
