import { InfoCardType, Sprite } from "../../../types/Types";

const sprite1_Card2: Sprite[] = [
  {
    width: 352,
    height: 111,
    sprite_bg_img: "/img/others/intro_one.png",
    sprites: 2,
  },
  {
    width: 308,
    height: 144,
    sprite_bg_img: "/img/others/intro_one_hover.png",
    sprites: 2,
  },
];

const sprite2_Card2: Sprite[] = [
  {
    width: 316 * 0.9,
    height: 155 * 0.9,
    sprite_bg_img: "/img/others/intro_two.png",
    sprites: 2,
  },
  {
    width: 362 * 0.84,
    height: 176 * 0.84,
    sprite_bg_img: "/img/others/intro_two_hover.png",
    sprites: 2,
  },
];

const sprite3_Card2: Sprite[] = [
  {
    width: 380,
    height: 118,
    sprite_bg_img: "/img/others/intro_three.png",
    sprites: 2,
  },
  {
    width: 420,
    height: 140,
    sprite_bg_img: "/img/others/intro_three_hover.png",
    sprites: 2,
  },
];

export const Card2: InfoCardType[] = [
  {
    id: 0,
    width: 400,
    height: 500,
    typeCard: "Hover",
    info_img: sprite1_Card2,
    text: "Isaac y su madre vivían en una pequeña casa en lo alto de una colina. Él pasaba sus días jugando, mientras su madre veía programas religiosos. Todo era tranquilo, hasta que un día, ella escuchó una voz celestial",
    bg_img: "/img/UI/cards/large_cardv1_1.png",
    totalCard: 3,
    top: 20,
    left: 12.5,
    moveX: [-20, 20],
  },
  {
    id: 1,
    width: 400,
    height: 500,
    typeCard: "Hover",
    info_img: sprite2_Card2,
    text: " La voz le dijo que su hijo estaba manchado por el pecado y que debía ser Obediente, su madre tomó un cuchillo, decidida a cumplir la voluntad divina. Isaac, aterrorizado, vio cómo su destino se sellaba.",
    bg_img: "/img/UI/cards/large_cardv2_1.png",
    totalCard: 3,
    bottom: 31,
    left: 39.2,
    moveX: [-20, 20],
  },
  {
    id: 2,
    width: 400,
    height: 500,
    typeCard: "Hover",
    info_img: sprite3_Card2,
    text: "Antes de que fuera demasiado tarde, Isaac encontró una trampilla en su habitación. Sin otra opción, la abrió y se lanzó al vacío, cayendo en un oscuro sótano lleno de peligros que nunca imaginó.",
    bg_img: "/img/UI/cards/large_cardv3_1.png",
    totalCard: 3,
    bottom: 20,
    right: 13,
    moveX: [-20, 20],
  },
];

const sprite2_Card3: Sprite[] = [
  {
    width: 30*2.50,
    height: 31*2.50,
    sprite_bg_img: "/img/monsters/vis.png",
    sprites: 8,
    name:"Vis"
  },
  {
    width: 21*2.50,
    height: 23*2.50,
    sprite_bg_img: "public/img/monsters/sucker.png",
    sprites: 2,
    name:"Sucker"
  },
  {
    width: (148 /4) *2.50,
    height: 17*2.50,
    sprite_bg_img: "/img/monsters/spitty.png",
    sprites: 4,
    name:"Spitty"
  },
  {
    width: (150 /3) *2.50,
    height: 33*2.50,
    sprite_bg_img: "/img/monsters/one_tooth.png",
    sprites: 3,
    name:"One Tooth"
  },
];

export const Card3: InfoCardType[] = [
  {
    id: 0,
    width: 470,
    height: 180,
    typeCard: "Normal",
    text: "Las sombras esconden horribles monstruos. Cada criatura tiene su propio instinto asesino y no dudarán en cazarte. ¿Estás listo para enfrentarlos?",
    bg_img: "/img/UI/cards/mini_large_cardv2.png",
    totalCard: 3,
    top: 24,
    right: 15,
    moveX: [20, -20],
  },
  {
    id: 1,
    width: 400,
    height: 500,
    typeCard: "Carusel",
    info_img: sprite2_Card3,
    text: "Cada enemigo es único: algunos son rápidos, otros resistentes, y unos pocos… impredecibles. Aprende sus patrones, usa el entorno a tu favor y descubre sus debilidades antes de que sea demasiado tarde.",
    bg_img: "/img/UI/cards/large_cardv4.png",
    totalCard: 3,
    bottom: 39,
    left: 14,
    moveX: [-20, 20],
  },
  {
    id: 2,
    width: 470,
    height: 180,
    typeCard: "Normal",
    text: "Cada paso cuenta, cada decisión puede salvarte o condenarte. Esquiva, ataca y adapta tu estrategia con rapidez... solo así podrás salir con vida.",
    bg_img: "/img/UI/cards/mini_large_cardv1.png",
    totalCard: 3,
    bottom: 26,
    right: 17,
    moveX: [20, -20],
  },
];
