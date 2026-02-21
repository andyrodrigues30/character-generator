import React, { useMemo } from "react";
import { CharacterEntry } from "../types/character";
import Sentence from "./Sentence";

interface Props {
  history: CharacterEntry[];
}

const History: React.FC<Props> = ({ history }) => {
  const lastTwo = useMemo(() => {
    return history.slice(-2);
  }, [history]);

  return (
    <>
      {lastTwo.map((entry, index) => (
        <h2 key={index}>
          <Sentence entry={entry} />
        </h2>
      ))}
    </>
  );
};

export default History;
