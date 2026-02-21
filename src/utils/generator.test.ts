import { generateCharacter } from "./generator";
import { CharacterData } from "../types/character";

const mockData: CharacterData = {
  verb: ["holding"],
  holdingitem: ["sword"],
  ridingitem: [],
  playingitem: [],
  character2: [],
  personality: ["brave"],
  character: ["knight"],
  clothing: ["armor"]
};

describe("generateCharacter", () => {
  it("generates a valid character object", () => {
    const result = generateCharacter(mockData);

    expect(result).toEqual({
      personality: "brave",
      character: "knight",
      clothing: "armor",
      verb: "holding",
      item: "sword"
    });
  });

  it("returns all required properties", () => {
    const result = generateCharacter(mockData);

    expect(result).toHaveProperty("personality");
    expect(result).toHaveProperty("character");
    expect(result).toHaveProperty("clothing");
    expect(result).toHaveProperty("verb");
    expect(result).toHaveProperty("item");
  });
});
