import React, { useEffect, useState } from "react";
import Produto from "../Produto";

const Page = () => {
  const [message, setMessage] = useState("");
  const [dados, setDados] = useState(null);

  useEffect(() => {
    setMessage("Componente acabou de ser montado - DidMount");

    const produto = localStorage.getItem("produto");

    if (produto) {
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
        .then((res) => res.json())
        .then((json) => setDados(json));
    }
  }, []);

  useEffect(() => {
    if (dados) {
      localStorage.setItem("produto", dados.nome);
    }
  }, [dados]);

  function handleClick(event) {
    const produto = event.target.innerText;
    fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
      .then((res) => res.json())
      .then((json) => setDados(json));

    setMessage("Componente acabou de ser atualizado - DidUpdate");
  }
  return (
    <div>
      <h1> Lidando com clico de vida do componente.</h1>

      <p>{message}</p>

      <button onClick={handleClick}>Notebook</button>
      <button onClick={handleClick}>Smartphone</button>

      {dados && (
        <Produto produto={dados} setDados={setDados} setMessage={setMessage} />
      )}
    </div>
  );
};

export default Page;
