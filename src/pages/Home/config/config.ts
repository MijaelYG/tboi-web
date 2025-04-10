import { Section } from "../../../types/Types";
import { Card2, Card3, Card4, Card5 } from "./cards";
import { pixelSprite2, pixelSprite3, pixelSprite4 } from "./sprites";

const sectionHeight = [140, 500, 650, 300, 400, 500, 400, 300, 150];

export const heightTotal = sectionHeight.reduce(
  (acum, number) => acum + number,
  0
);

export const sections: Section[] = [
  {
    id: 1,
    shadow: "11",
    name: "basement",
  },
  {
    id: 2,
    shadow: "12",
    name: "cellar",
    infoCard: Card2,
    pixelSprite: pixelSprite2,
  },
  {
    id: 3,
    shadow: "21",
    name: "cavesv2",
    infoCard: Card3,
    pixelSprite: pixelSprite3,
  },
  {
    id: 4,
    shadow: "22",
    name: "catacombs",
    infoCard:Card4,
    pixelSprite: pixelSprite4,
  },
  {
    id: 5,
    shadow: "31",
    name: "necropolis",
    infoCard: Card5,
    pixelSprite: pixelSprite2,
  },
  {
    id: 6,
    shadow: "32",
    name: "depthsL",
    infoCard: Card2,
    pixelSprite: pixelSprite2,
  },
  {
    id: 7,
    shadow: "41",
    name: "utero",
    infoCard: Card2,
    pixelSprite: pixelSprite2,
  },
];

export const scrollStartEnd: [number, number][] = sectionHeight.map(
  (height, index) => {
    const start =
      index === 0
        ? 0
        : sectionHeight.slice(0, index).reduce((sum, h) => sum + h, 0) /
          heightTotal;
    const end = start + height / heightTotal;
    return [start, end];
  }
);
