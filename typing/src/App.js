import { useState, useEffect } from "react";
import "./App.css";

// importando component Word
import Word from "./components/Word.jsx";

// Import de 2 funções de help
import { getWord, isValidKey } from "./helpers";

// Definindo quantidade das teclas pressionados mostrada na tela
const MAX_TYPED_KEYS = 30;

function App() {
  // Definindo estados da aplicação, teclas pressionadas, teclas válidas, lista de palavras acertadas, e palavra obtida.
  const [typedKeys, setTypedKeys] = useState([]);
  const [validKeys, setValidKeys] = useState([]);
  const [completedWords, setCompletedWords] = useState([]);
  const [word, setWord] = useState("");
  const [anime, setAnime] = useState(true);

  // hook para obter a primeira palavra a ser digitada
  useEffect(() => {
    // função getWord busca uma palavra de um arquivo json de forma aleatoria
    setWord(getWord());
  }, []);

  // Utilizando o useEffect para checar e atualizar estados.
  useEffect(() => {
    //  Formando a palavra apartir do array de validKeys
    const wordFromValidKeys = validKeys.join("").toLowerCase();

    // Comparar a palavra formada ate o momento com a palavra gerada.
    if (word && word === wordFromValidKeys) {
      // Caso a palavra ja esteja completa gera uma nova palavra sem repetir a mesma palavra.
      let newWord = null;
      do {
        newWord = getWord();
      } while (completedWords.includes(newWord));

      // Atualiza os estados
      setAnime(true);
      setWord(newWord);
      setValidKeys([]);
      setCompletedWords((prev) => [...prev, word]);
    }
  }, [word, validKeys, completedWords]);

  // Manipulando o event keyDown
  const handleKeyDown = (event) => {
    event.preventDefault();
    setAnime(false);
    // pega a tecla pressionada
    const { key } = event;

    // Atualiza o estado de teclas pressionadas limitando a quantidade caracteres
    setTypedKeys([...typedKeys, key].slice(MAX_TYPED_KEYS * -1));

    // Checa se a tecla pressionada é valida, verificando se a tecla é contida dentro da palavra ( atraves do função de help isValidKeys)
    if (isValidKey(key, word)) {
      // Atualiza o estado de teclas válidas
      setValidKeys((prev) => {
        // Checa se o array de teclas validas ja é do tamano da palavra a ser digitada e checa se a proxima letra é a digitada e retorna-a caso seja.
        const isValidLength = prev.length <= word.length;
        const isNextChar = isValidLength && word[prev.length] === key;

        return isNextChar ? [...prev, key] : prev;
      });
    }
  };

  return (
    <div className="container" tabIndex="0" onKeyDown={handleKeyDown}>
      {/* Componente Word recebe a palavra e as teclas válidas */}
      <div className="valid-keys">
        <Word word={word} validKeys={validKeys} anime={anime} />
      </div>

      {/* Adiciona as letras que estçao sendo dogitadas  */}
      <div className="typed-keys">{typedKeys ? typedKeys.join(" ") : null}</div>

      {/* Adiciona as palavras digitadas ate o momento  */}
      <div className="completed-words">
        <ol>
          {completedWords.map((word) => (
            <li key={word}>{word}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default App;
