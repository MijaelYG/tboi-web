import { PixelSprite, Section } from "../Types";

const sectionHeight = [140, 500, 650, 300, 400, 500, 400, 300, 150];

export const heightTotal = sectionHeight.reduce(
  (acum, number) => acum + number,
  0
);

const pixelSprite2: PixelSprite[] = [
  {
    width: 10,
    height: 8.5,
    background_img: "/img/monsters/baby_long_legs.png",
    animation: [0, 30],
    bottom: 20,
    right: 65,
    x: 50,
    y: -50,
    sprites: 5,
  },
  {
    width: 10,
    height: 8.5,
    background_img: "/img/monsters/crazy_long_legs.png",
    animation: [3, 30],
    bottom: 52,
    right: 14,
    x: -80,
    y: -80,
    sprites: 5,
  },
  {
    width: 6.5,
    height: 8.5,
    background_img: "/img/others/gaper.png",
    animation: [0, 30],
    bottom: 45.5,
    left: 12,
    x: 100,
    sprites: 10,
  },
  {
    width: 6.5,
    height: 8,
    background_img: "/img/others/isaac_running.png",
    animation: [0, 12],
    bottom: 45,
    right: 35,
    x: -90,
    sprites: 10,
  },
];

const pixelSprite3: PixelSprite[] = [
  {
    width: 8.5,
    height: 9,
    background_img: "/img/others/fire_place.png",
    animation: [0, 25],
    top: 8.4,
    right: 15.7,
    sprites: 6,
  },
  {
    width: 8.5,
    height: 9,
    background_img: "/img/others/fire_place.png",
    animation: [3, 28],
    bottom: 11.4,
    left: 16.7,
    sprites: 6,
  },
  {
    width: 11,
    height: 7.5,
    background_img: "public/img/monsters/one_tooth.png",
    animation: [0, 18],
    top: 18,
    left: 36,
    x: -40,
    y:100,
    sprites: 3,
  },
];

export const sections: Section[] = [
  {
    id: 1,
    shadow: "11",
    name: "basement",
    pixelSprite: pixelSprite2,
  },
  { id: 2, shadow: "12", name: "cellar", pixelSprite: pixelSprite2 },
  { id: 3, shadow: "21", name: "cavesv2", pixelSprite: pixelSprite3 },
  { id: 4, shadow: "22", name: "catacombs", pixelSprite: pixelSprite2 },
  { id: 5, shadow: "31", name: "necropolis", pixelSprite: pixelSprite2 },
  { id: 6, shadow: "32", name: "depthsL", pixelSprite: pixelSprite2 },
  { id: 7, shadow: "41", name: "utero", pixelSprite: pixelSprite2 },
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

