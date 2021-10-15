import React from "react";

const Produto = ({ produto, setDados, setMessage }) => {
  console.log(produto);

  function handleClick() {
    setDados(null);
    setMessage("O Componente Produto foi desmontado - WillUnmount");
  }
  return (
    <div>
      <p>Preferência: {produto.nome}</p>
      <hr />
      <h1>{produto.nome}</h1>
      <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
      <p>R$ {produto.preco}</p>

      <button onClick={handleClick}>Remove</button>
    </div>
  );
};

export default Produto;
