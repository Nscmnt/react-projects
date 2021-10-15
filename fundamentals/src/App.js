// imports são utilizando para incluir outros arquivos para serem utilizados no arquivo atual, como arquivos css, imagens, outros arquivos JS - componentes /libs, etc.
import React from "react";
import "./App.css";
import HelloWord from "./components/HelloWord";

// Todo código é utilizado em funções podendo ser utilizado class porém menos utilizado atualmente, no caso do JSX é código semelhante ao HTML que é retornado de funções que gera os componentes que fazem parte do layout.
function App() {
  // JSX tem algumas particularidade que diferencia da escrita do HTML como atributos, tudo que existe em HTML que gera conflito com JS é utilizado em camelCase como class que é utilizado className no JSX.
  return (
    // sintaxe muito semelhante ao HTML o que facilita o desenvolvimento.
    // Utiliza se chaves para interpolar código JS
    <div className="App">
      <h1 className="title">Desenvolvimento com React !!</h1>
      <hr />
      <HelloWord />
    </div>
  );
}

export default App;
