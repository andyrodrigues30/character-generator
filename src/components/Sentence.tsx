import React from "react";
import { CharacterEntry } from "../types/character";

interface Props {
  entry: CharacterEntry;
}

const Sentence: React.FC<Props> = ({ entry }) => {
  const imp = (word: string) => <span id="imp">{word}</span>;

  const { personality, character, clothing, verb, item } = entry;

  return (
    <>
      {personality} {imp(character)} wearing {imp(clothing)} {verb}{" "}
      {imp(item)}.
    </>
  );
};

export default Sentence;
