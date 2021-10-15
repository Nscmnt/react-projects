import React from "react";

// PropTypes são um tipo de validação dos dados ássados a um componente
import PropTypes from "prop-types";

const Phrase = ({ children, background, handleClick }) => {
  // Props são recebidas como um objeto, esse pode ser desestruturado pegando os keys necessário e utilizada conforme a lógica do componente, uma prop padrão que é passando quando inserido algo dentro do <component> aqui </componente/> é chamada de childrem.

  return (
    // Um componente precisa retornar um único elemento, ou seja, caso tenha uma estrutura maior é necessário que exista uma div wrapper por exemplo, você pode opcionalmente utilizar o react fragments que são apenas <> </> para 'segurar' os elementos.
    <>
      <p
        style={{
          background: `${background}`,
          padding: "15px",
          borderRadius: "6px",
          color: `rebeccapurple`,
          opacity: ".8",
        }}
        onClick={handleClick}
      >
        {children}
      </p>
    </>
  );
};

// Você pode definir também o defaultProp para o caso de  nenhum prop for passada.
Phrase.defaultProps = {
  background: "#FFF",
};

// Com PropTypes você defini os tipos de dados que são válidos, caso seja passado um tipo doferente o console gera um erro mesmo que o código funcione.
Phrase.propTypes = {
  background: PropTypes.string,
};

export default Phrase;
