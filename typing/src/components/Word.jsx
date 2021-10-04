import React from "react";

import "./Word.css";

const Word = ({ word, validKeys, anime }) => {
  if (!word) return null;

  // Após criar uma palavra com as teclas valida, separa as que ja deram match e as que ainda restão para estilização na apresentação da palavra na tela
  const joinedKeys = validKeys.join("");
  const matched = word.slice(0, joinedKeys.length);
  const remainder = word.slice(joinedKeys.length);

  //

  return (
    <>
      <span className="matched">{matched}</span>
      <span className={`remainder ${anime && "anime"}`}>{remainder}</span>
    </>
  );
};

export default Word;
