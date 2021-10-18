import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext();

const URL_API = "https://ranekapi.origamid.dev/json/api/produto";

export const StorageGlobal = ({ children }) => {
  const [produtos, setProdutos] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    async function getProdutos() {
      const res = await fetch(URL_API);
      const json = await res.json();

      if (res.ok) setProdutos(json);
      else setError(res.statusText);
    }
    getProdutos();
  }, []);

  function limparProdutos() {
    setProdutos(null);
  }

  return (
    <GlobalContext.Provider value={{ produtos, error, limparProdutos }}>
      {children}
    </GlobalContext.Provider>
  );
};
