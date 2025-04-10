import { PixelSprite, ShadowSprite } from "../../../types/Types"

const shadow_character: ShadowSprite = {
  width:5,
  height:2,
  shadow_img:"/img/shadows/pixel/shadow_character.png",
  bottom:5,
  animation:[0,20],
  sprites:2,
}

const shadow_spider: ShadowSprite = {
  width:3,
  height:1.5,
  shadow_img:"/img/shadows/pixel/shadow_enemies.png",
  bottom:-10,
  animation:[0,30],
  sprites:3,
}

const shadow_bat: ShadowSprite = {
  width:5,
  height:2,
  shadow_img:"/img/shadows/pixel/shadow_enemies.png",
  bottom:-6,
  animation:[2,30],
  sprites:3,
}

const shadow_charger_back: ShadowSprite = {
  width:5,
  height:2,
  shadow_img:"/img/shadows/pixel/shadow_enemies.png",
  bottom:19,
  left:-15,
  animation:[0,30],
  sprites:3,
}

export const pixelSprite2: PixelSprite[] = [
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
    shadow:shadow_spider
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
    shadow:shadow_spider
  },
  {
    width: 6.5,
    height: 8,
    background_img: "/img/monsters/gaper.png",
    animation: [2, 22],
    bottom: 45.5,
    left: 12,
    x: 100,
    sprites: 10,
    scaleX:-1,
    shadow:shadow_character
  },
  {
    width: 6.5,
    height: 8,
    background_img: "/img/others/isaac_running.png",
    animation: [0, 20],
    bottom: 45,
    right: 40,
    x: -90,
    sprites: 10,
    shadow:shadow_character,
  },
];

export const pixelSprite3: PixelSprite[] = [
  {
    width: 8.5,
    height: 9,
    background_img: "/img/obstacles/fire_place.png",
    animation: [0, 25],
    top: 8.4,
    right: 15.7,
    sprites: 6,
  },
  {
    width: 8.5,
    height: 9,
    background_img: "/img/obstacles/fire_place.png",
    animation: [3, 28],
    bottom: 11.4,
    left: 16.7,
    sprites: 6,
  },
  {
    width: 11,
    height: 7.5,
    background_img: "/img/monsters/one_tooth.png",
    animation: [0, 26],
    top: 20,
    left: 30,
    x: -40,
    y: 120,
    sprites: 3,
    shadow:shadow_bat
  },
  {
    width: 11,
    height: 8.5,
    background_img: "/img/monsters/fat_bat.png",
    animation: [0, 26],
    bottom: 18,
    left: 28,
    x: 50,
    y: -80,
    sprites: 3,
    shadow:shadow_bat
  },
  {
    width: 7,
    height: 3.2,
    background_img: "/img/monsters/charger.png",
    animation: [0, 28],
    top: 13,
    left: 43,
    x: 130,
    sprites: 4,
    shadow:shadow_character
  },
  {
    width: 11,
    height: 7.5,
    background_img: "/img/monsters/one_tooth_angry.png",
    animation: [2, 26],
    top: 32,
    right: 40,
    x:45,
    y: 130,
    sprites: 3,
    shadow:shadow_bat
  },
  {
    width: 4,
    height: 5.5,
    background_img: "/img/monsters/charger_back.png",
    animation: [2, 26],
    bottom: 25,
    left: 13,
    y: -160,
    sprites: 4,
    shadow:shadow_charger_back
  },
  {
    width: 4,
    height: 5.5,
    background_img: "/img/monsters/charger_front.png",
    animation: [2, 26],
    bottom: 50,
    right: 13,
    y: 250,
    sprites: 4,
    shadow:shadow_charger_back
  },
  {
    width: 7,
    height: 8.6,
    background_img: "/img/characters/eve/eve_front.png",
    animation: [0, 20],
    top: 38,
    right: 25,
    y: 180,
    sprites: 10,
    shadow:shadow_character
  },
];

export const pixelSprite4: PixelSprite[] = [
  {
    width: 5,
    height: 6.9,
    background_img: "/img/monsters/blind_creep_wall_lr.png",
    animation: [0, 20],
    top: 40,
    right: 7,
    sprites: 4,
    y:100,
  },
  {
    width: 6.9,
    height: 5,
    background_img: "/img/monsters/wall_creep.png",
    animation: [2, 22],
    top: 10.5,
    left: 38,
    sprites: 4,
    x:-90,
  },

  {
    width: 4.5,
    height: 5.5,
    background_img: "/img/monsters/dip.png",
    animation: [0, 10],
    bottom: 28.5,
    right: 24.5,
    sprites: 3,
    x:50,
    y:-100,
  },
];