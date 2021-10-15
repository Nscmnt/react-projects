import React, { useRef, useState, useEffect } from "react";
import Phrase from "./Phrase";
import Forms from "./Forms";
import Modal from "./Modal";
import Button from "./Button";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Page from "./pages/Page";
import NotFound from "./pages/NotFound";

// Opções de cores para o background
const colors = [
  "#FF0005",
  "#FFF28C",
  "#3D3D3D",
  "#A3CDD9",
  "#506AD4",
  "#C2B8AD",
];

//Componentes são arquivos .JS ou .JSX que retornam código JSX ( que é o que será renderizado pelo browser), esse arquivo é importado onde será utilizado.
const HelloWord = () => {
  const colorsLength = colors.length;
  // Hooks são funçãos que manipulam o estado da aplicação, com eles é possivel gerenciar o ciclo de vida dos componentes.

  // UseState - é o hook mais utilizado, essa função retorna um array com o estado e uma função para manipular o estado.

  const [color, setColor] = useState(
    () => colors[Math.floor(Math.random() * colorsLength)]
  );

  const [modal, setModal] = useState(null);

  // Objeto para definir um estilo de exemplo para o card
  const styles = {
    padding: "10px",
    textAlign: "center",
    background: "#999",
    color: "#111",
    borderRadius: "8px",
  };

  // Definindo uma função para manipular o click no componente e alterar a cor do seu background, alterando assim o state e realizando uma nova renderização no que o estato afetar.
  function handleClick() {
    let newColor;
    do {
      const index = Math.floor(Math.random() * colorsLength);

      newColor = colors[index];
    } while (newColor === color);

    setColor(newColor);
  }

  // hook que faz referência a um elemento.
  const elementRef = useRef();

  useEffect(() => {
    console.log(elementRef);
  }, []);

  return (
    // Uma das formas de utilizar CSS é com o atributo style ( inline ), nesse caso é passado um objeto com regras css utilizando camelCase como todo código que não é JS utilizado dentro do JSX é convercionado.
    <div style={styles}>
      <h2> Hello Word - Esse é o primeiro componente criado !</h2> <br />
      {/* Props são atributos normalmente personalizados que podem ser passado para componentes semelhante a parâmentros passado a funções*/}
      {/* Props são somente leitura e o fluxo de dados é unidirecional, podemos também passar além de atributos simples, funções, manipuladores de eventos.. */}
      <Phrase background={color}>
        {" "}
        " Esse é um componente Phrase que foi chamado dentro do componente
        HelloWord utilizando Props para passar informações que podem ser
        dinâmicas como por exemplo a cor de fundo e o texto como childrem."
      </Phrase>
      <Phrase background={color}>
        {" "}
        Aqui o componente Phrase esta sendo utilizando novamente para mostrar o
        princípio de reutilização de componentes."
      </Phrase>
      <Phrase handleClick={handleClick}>
        {" "}
        "Nessa chamada do Phrase foi passado via props uma função que manipula a
        cor do background ao clicar."
      </Phrase>
      <Forms />
      {/* utilizando um botão passando uma função para alterar um estado que é utilizado para rederização condicional de um modal */}
      <p ref={elementRef}>
        React utiliza rederização condicional baseado no state conforme a ação
        do botão abaixo.
      </p>
      <Button showModal={() => setModal(true)}>Mostrar Modal</Button>
      {modal && <Modal setModal={setModal} />}
      <hr />
      <h2>React Router DOM</h2>
      <p>
        {" "}
        Lidando comas routas da aplicação - Clique no link abaixo e mude de
        página sem reload.
      </p>
      <BrowserRouter>
        <ul>
          <li>
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li>
            {" "}
            <Link to="/page">Life Cycle</Link>
          </li>
        </ul>
        <Switch>
          <Route path="/page">
            <Page />
          </Route>
          <Route path="/">{""}</Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
};

// Todo arquivo/código que será utilizado em outros arquivos necessita ser exportado, nesse caso como é um única função ela é exportado por padrão com o código abaixo.
export default HelloWord;
