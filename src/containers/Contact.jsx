import React from "react";
import { SectionTitle, SocialMediaLinks } from "../components/components-index";

const Contact = () => {
  return (
    <section>
      <div className="mb-8">
        <SectionTitle
          text="Contato"
          textAlign="text-center"
          subtitleText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, vel."
        />
        <SocialMediaLinks />
      </div>

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
          className="btn btn-primary justify-self-center"
        />
      </form>

      <div>
        {/* <img
            src="https://placehold.it/200"
            alt=""
          /> */}
      </div>
    </section>
  );
};

export default Contact;
