import React, { useState, useCallback } from "react";
import "./App.css";
import data from "./data.json";

import { CharacterEntry, CharacterData } from "./types/character";
import { generateCharacter } from "./utils/generator";
import History from "./components/History";
import GeneratorButton from "./components/GeneratorButton";

const App: React.FC = () => {
  const [history, setHistory] = useState<CharacterEntry[]>([]);

  const handleGenerate = useCallback(() => {
    const newCharacter = generateCharacter(data as CharacterData);
    setHistory((prev) => [...prev, newCharacter]);
  }, []);

  return (
    <div className="App">
      <header>
        <h1>Character Generator</h1>
      </header>

      <main>
        <div className="sentence">
          <History history={history} />
        </div>

        <GeneratorButton onClick={handleGenerate} />
      </main>
    </div>
  );
};

export default App;
