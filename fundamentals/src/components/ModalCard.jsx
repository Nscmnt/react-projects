import React, { useContext } from "react";

import { GlobalContext } from "../GlobalContext";

const ModalCard = () => {
  const { produtos, limparProdutos } = useContext(GlobalContext);

  return (
    <div
      style={{
        width: "600px",
        height: "auto",
        padding: "15px",
        borderRadius: "10px",
        color: "white",
        fontSize: "1.5rem",
        background: "rebeccapurple",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      Olá, eu sou um Modal!!
      <p>{produtos[0].nome}</p>
      <img src={produtos[0].fotos[0].src} alt={produtos[0].descricao} />
      <button onClick={limparProdutos}>Limpar Card</button>
    </div>
  );
};

export default ModalCard;
