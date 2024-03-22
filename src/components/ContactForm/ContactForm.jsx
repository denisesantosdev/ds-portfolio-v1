import React from "react";
import icons from "../../data/icons";

import { useForm } from "@formspree/react";

const ContactForm = () => {
  const [state, handleSubmit, reset] = useForm("meqylnqb");

  console.log(state);

  if (state.succeeded) {
    return <p className="m-auto w-fit opacity-75">Obrigado! Em breve entrarei em contato!</p>;
  }

  if (state.errors !== null) {
    return <p className="m-auto w-fit opacity-75">Opa. Algo deu errado 🤔</p>;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="grid max-w-[500px] m-auto gap-5 ">
      <div>
        <label htmlFor="nome" className="text-sm opacity-75">Seu nome</label>
        <input
          id="nome"
          type="text"
          name="nome"
          className="input input-secondary w-full text-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="email" className="text-sm opacity-75">Seu email</label>
        <input
          id="email"
          type="email"
          name="email"
          className="input input-secondary w-full text-sm"
          required
        />
      </div>
      <div>
        <label htmlFor="mensagem" className="text-sm opacity-75">Sua mensagem</label>
        <textarea
          name="mensagem"
          id="mensagem"
          cols="30"
          rows="10"
          placeholder="Diga Olá!"
          className="textarea textarea-secondary resize-none w-full text-sm"
          required></textarea>
      </div>
      <button
        type="submit"
        disabled={state.submitting}
        className="btn btn-primary h-fit min-h-fit justify-self-center px-8 py-4">
        <icons.send size={35} />
      </button>
    </form>
  );
};

export default ContactForm;
