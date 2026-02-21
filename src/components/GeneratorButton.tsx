import React from "react";

interface Props {
  onClick: () => void;
}

const GeneratorButton: React.FC<Props> = ({ onClick }) => {
  return (
    <button className="gen-button" onClick={onClick}>
      Generate
    </button>
  );
};

export default GeneratorButton;
