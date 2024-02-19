import React from "react";
import { SectionTitle, SocialMediaLinks } from "../components/components-index";

import { pageSectionsNames } from "../data/pageSectionsNames";
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

      <div className="grid md:grid-cols-2">
        {/* <img
          className="justify-self-center mt-20 hidden md:block"
          src="https://placehold.it/200"
          alt=""
        /> */}
        {/* <Lottie
          animationData={pcLines}
          interactivity={{
            mode: "scroll",
            actions: [
              {
                visibility: [0, 0.2],
                type: "stop",
                frames: [0],
              },
              {
                visibility: [0.2, 0.45],
                type: "seek",
                frames: [0, 45],
              },
              {
                visibility: [0.45, 1.0],
                type: "seek",
                frames: [45, 240],
              },
            ],
          }}
        /> */}
        <form
          action=""
          className="grid gap-5">
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
              placeholder="Sua mensagem"
              className="textarea textarea-secondary resize-none w-full text-sm"></textarea>
          </div>
          <input
            type="button"
            value="Enviar"
            className="btn btn-primary btn-outline justify-self-center"
          />
        </form>
      </div>
    </section>
  );
};

export default Contact;
