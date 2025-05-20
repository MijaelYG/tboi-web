import { Section } from "../../../types/Types";
import { Card2, Card3, Card4, Card5 } from "./cards";
import {
  pixelSprite2,
  pixelSprite3,
  pixelSprite4,
  pixelSprite5,
} from "./sprites";

const sectionHeight = [140, 500, 650, 250, 380, 440, 400, 300, 120];

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
    infoCard: Card4,
    pixelSprite: pixelSprite4,
  },
  {
    id: 5,
    shadow: "31",
    name: "necropolis",
    infoCard: Card5,
    pixelSprite: pixelSprite5,
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

export const sectionNav = [
  scrollStartEnd[0][0],
  scrollStartEnd[1][0],
  scrollStartEnd[2][0],
  scrollStartEnd[3][0],
  scrollStartEnd[4][0],
  scrollStartEnd[5][0],
  scrollStartEnd[7][0],
];

export const sectionNavStartEnd: [number, number][] = [
  [scrollStartEnd[0][0], scrollStartEnd[0][1]],
  [scrollStartEnd[1][0], scrollStartEnd[1][1]],
  [scrollStartEnd[2][0], scrollStartEnd[2][1]],
  [scrollStartEnd[3][0], scrollStartEnd[3][1]],
  [scrollStartEnd[4][0], scrollStartEnd[4][1]],
  [scrollStartEnd[5][0], scrollStartEnd[6][1]],
  [scrollStartEnd[7][0], scrollStartEnd[7][1]],
];
