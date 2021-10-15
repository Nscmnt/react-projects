import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// ReactDOM é a parte do react utilizado para lidar com a renderização no browser, utiliza se o método render para incluir um componente, normalmente o App, que é o ponto inicial da cadeia de componentes que um app React possui, o segudo parâmentro é o elemento html onde o app será 'inserido'.
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
