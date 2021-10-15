import React from "react";
import Input from "./Input";

const Forms = () => {
  // Formulários em React utilizam inputs controlados para ser possivel gerenciar o seu estado, realizar validações personalizadas... o evento onChange é utilizado para gerenciar as alterações.
  return (
    <form className="form">
      <legend>
        Lidando com formulários em React | Podemos isolar cada input em
        componentes, realizar validações personalizadas, utilizando o onChange
        para controlar-los.
      </legend>
      <hr />
      <Input label="Nome" type="text" name="nome" placeholder="Primeiro nome" />
      <Input
        label="Sobrenome"
        type="text"
        name="sobrenome"
        placeholder="Último nome"
      />
    </form>
  );
};

export default Forms;
