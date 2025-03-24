import { InfoCardType, PixelSprite, Section, Sprite } from "../Types";

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
    background_img: "/img/monsters/one_tooth.png",
    animation: [0, 18],
    top: 18,
    left: 36,
    x: -40,
    y:100,
    sprites: 3,
  },
];

const sprite1_Card2: Sprite[]=[
  {
    width: 352,
    height: 111,
    sprite_bg_img: "/img/others/intro_one.png",
    sprites: 2
  },
  {
    width: 308,
    height: 144,
    sprite_bg_img: "/img/others/intro_one_hover.png",
    sprites: 2
  }
]

const sprite2_Card2: Sprite[]=[
  {
    width: 316 * 0.90,
    height: 155 * 0.90,
    sprite_bg_img: "/img/others/intro_two.png",
    sprites: 2
  },
  {
    width: 362 * 0.84,
    height: 176 * 0.84,
    sprite_bg_img: "/img/others/intro_two_hover.png",
    sprites: 2
  }
]

const sprite3_Card2: Sprite[]=[
  {
    width: 380 ,
    height: 118 ,
    sprite_bg_img: "/img/others/intro_three.png",
    sprites: 2
  },
  {
    width: 420 ,
    height: 140,
    sprite_bg_img: "/img/others/intro_three_hover.png",
    sprites: 2
  }
]

const Card2: InfoCardType[] =[
  {id:0,
    width:400,
    height:500,
    typeCard:"Hover",
    info_img:sprite1_Card2,
    text:"Isaac y su madre vivían en una pequeña casa en lo alto de una colina. Él pasaba sus días jugando, mientras su madre veía programas religiosos. Todo era tranquilo, hasta que un día, ella escuchó una voz celestial",
    bg_img:"/img/UI/cards/large_cardv1_1.png",
    totalCard: 3,
    bottom:40,
    left:11,
    moveX:[-20,0,0,20],
  },
  {id:1,
    width:400,
    height:500,
    typeCard:"Hover",
    info_img:sprite2_Card2,
    text:" La voz le dijo que su hijo estaba manchado por el pecado y que debía ser Obediente, su madre tomó un cuchillo, decidida a cumplir la voluntad divina. Isaac, aterrorizado, vio cómo su destino se sellaba.",
    bg_img:"/img/UI/cards/large_cardv2_1.png",
    totalCard: 3,
    bottom:31,
    left:38.2,
    moveX:[-20,0,0,20],
  },
  {id:2,
    width:400,
    height:500,
    typeCard:"Hover",
    info_img:sprite3_Card2,
    text:"Antes de que fuera demasiado tarde, Isaac encontró una trampilla en su habitación. Sin otra opción, la abrió y se lanzó al vacío, cayendo en un oscuro sótano lleno de peligros que nunca imaginó.",
    bg_img:"/img/UI/cards/large_cardv3_1.png",
    totalCard: 3,
    bottom:20,
    right:13,
    moveX:[-20,0,0,20],
  }
]

export const sections: Section[] = [
  {
    id: 1,
    shadow: "11",
    name: "basement",
  },
  { id: 2, shadow: "12", name: "cellar",infoCard:Card2, pixelSprite: pixelSprite2 },
  { id: 3, shadow: "21", name: "cavesv2",infoCard:Card2, pixelSprite: pixelSprite3 },
  { id: 4, shadow: "22", name: "catacombs",infoCard:Card2, pixelSprite: pixelSprite2 },
  { id: 5, shadow: "31", name: "necropolis",infoCard:Card2, pixelSprite: pixelSprite2 },
  { id: 6, shadow: "32", name: "depthsL",infoCard:Card2, pixelSprite: pixelSprite2 },
  { id: 7, shadow: "41", name: "utero",infoCard:Card2, pixelSprite: pixelSprite2 },
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

