import wordsList from "../resources/words.json";

export const getWord = () => {
  const index = Math.floor(Math.random() * wordsList.length);

  const word = wordsList[index];

  return word.toLowerCase();
};

export const isValidKey = (key, word) => {
  if (!word) return false;

  const result = word.split("").includes(key);

  return result;
};
