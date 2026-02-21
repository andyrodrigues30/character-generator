import { CharacterEntry, CharacterData } from "../types/character";

export const getRandom = (arr: string[]): string =>
  arr[Math.floor(Math.random() * arr.length)];

export const generateCharacter = (
  data: CharacterData
): CharacterEntry => {
  const {
    verb,
    holdingitem,
    ridingitem,
    playingitem,
    character2,
    personality,
    character,
    clothing
  } = data;

  const randomVerb = getRandom(verb);

  let item: string;

  switch (randomVerb) {
    case "holding":
      item = getRandom(holdingitem);
      break;
    case "riding":
      item = getRandom(ridingitem);
      break;
    case "playing":
      item = getRandom(playingitem);
      break;
    default:
      item = getRandom(character2);
      break;
  }

  return {
    personality: getRandom(personality),
    character: getRandom(character),
    clothing: getRandom(clothing),
    verb: randomVerb,
    item
  };
};
