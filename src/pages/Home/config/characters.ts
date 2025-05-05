import { characters } from "../../../types/Types";

export const charactersCarousel: characters[] = [
  {
    id: 1,
    name: "Isaac",
    life: 3,
    attack: 2,
    speed: 2,
    items: [
      {
        id: 1,
        name: "The D6",
        type: "item",
      },
    ],
    itemsTainted: [
      {
        id: 1,
        name: "more options",
        type: "text",
      },
      {
        id: 2,
        name: "less room",
        type: "text",
      },
    ],
  },
  {
    id: 2,
    name: "Magdalene",
    life: 4,
    attack: 2,
    speed: 1,
    items: [
      {
        id: 1,
        name: "Yum Heart",
        type: "item",
      },
      {
        id: 2,
        name: "red and pink pill",
        type: "pickup",
      },
    ],
    itemsTainted:[
      {
        id: 1,
        name: "lethal hugs",
        type: "text",
      },
      {
        id: 2,
        name: "Yum Heart",
        type: "item",

      },
      {
        id: 3,
        name: "items heal more",
        type: "text",
      },
    ],
  },
  {
    id: 3,
    name: "Cain",
    life: 2,
    attack: 3,
    speed: 3,
    items: [
      {
        id: 1,
        name: "Lucky Foot",
        type: "item",
      },
      {
        id: 2,
        name: "Paper Clip",
        type: "trinket",
      },
    ],
    itemsTainted:[
      {
        id: 1,
        name: "No destiny",
        type: "text",
      },
      {
        id: 2,
        name: "Bag of Crafting",
        type: "item",
      },
    ],
  },
  {
    id: 4,
    name: "Judas",
    life: 1,
    attack: 4,
    speed: 2,
    items: [
      {
        id: 1,
        name: "The Book of Belial",
        type: "item",
      },
    ],
    itemsTainted:[
      {
        id: 1,
        name: "Shadow Eater",
        type: "text",
      },      
      {
        id: 2,
        name: "Dark Arts",
        type: "item",
      },
    ]
  },
  {
    id: 5,
    name: "blue_baby",
    life: -1,
    attack: 2,
    speed: 2,
    items: [
      {
        id: 1,
        name: "The Poop",
        type: "item",
      },
    ],
    itemsTainted:[ {
      id: 1,
      name: "No Bombs",
      type: "text",
    },
    {
      id: 2,
      name: "Only Poop",
      type: "text",
    },
    {
      id: 3,
      name: "Hold",
      type: "item",
    },]
  },
  {
    id: 6,
    name: "Eve",
    life: 2,
    attack: 1,
    speed: 3,
    items: [
      {
        id: 1,
        name: "Whore of Babylon",
        type: "item",
      },
      {
        id: 2,
        name: "Dead Bird",
        type: "item",
      },
      {
        id: 3,
        name: "Razor Blade",
        type: "item",
      },
    ],
    itemsTainted: [
      {
        id: 1,
        name: "Clot Summoner",
        type: "text",
      },
      {
        id: 2,
        name: "Sumptorium",
        type: "item",
      },
    ],
  },
  {
    id: 7,
    name: "Samson",
    life: 3,
    attack: 2,
    speed: 2,
    items: [
      {
        id: 1,
        name: "Bloody Lust",
        type: "item",
      },
      {
        id: 2,
        name: "Child's Heart",
        type: "trinket",
      },
    ],
    itemsTainted: [
      {
        id: 1,
        name: "Undying Rage",
        type: "text",
      },
      {
        id: 2,
        name: "Berserk!",
        type: "item",
      },
    ],
  },
  {
    id: 8,
    name: "Azazel",
    life: -1,
    attack: 4,
    speed: 3,
    items:[
      {
        id: 1,
        name: "The Fool",
        type: "pickup"
      }
    ],
    itemsTainted: [
      {
        id: 1,
        name: "Broken Wings",
        type: "text",
      },
      {
        id: 2,
        name: "Hemoptysis",
        type: "item",
      },
      {
        id: 3,
        name: "The Fool",
        type: "pickup"
      }
    ],
  },
  {
    id: 9,
    name: "Lazarus",
    life: 3,
    attack: 2,
    speed: 2,
    items: [
      {
        id: 1,
        name: "Anemic",
        type: "item",
      },
      {
        id: 2,
        name: "blue pill",
        type: "pickup",
      },
    ],
    itemsTainted: [
      {
        id: 1,
        name: "Between Life and Death",
        type: "text",
      },
      {
        id: 2,
        name: "Flip",
        type: "item",
      },
    ],
  },
  {
    id: 10,
    name: "Eden",
    life: 0,
    attack: 0,
    speed: 0,
    itemsTainted:[{
      id:1,
      name:"Ever Changing",
      type:"text"
    }]
  },
  {
    id: 11,
    name: "The_Lost",
    life: 0,
    attack: 2,
    speed: 2,
    items: [
      {
        id: 1,
        name: "Eternal D6",
        type: "item",
      },
      {
        id: 2,
        name: "Holy Mantle",
        type: "item",
      },
    ],
    itemsTainted:[{
      id:1,
      name:"Better Items",
      type:"text"
    },
    {
      id:2,
      name:"No Mantle",
      type:"text"
    }]
  },
  {
    id: 12,
    name: "Lilith",
    life: 1,
    attack: 2,
    speed: 2,
    items: [
      {
        id: 1,
        name: "Incubus",
        type: "item",
      },
      {
        id: 2,
        name: "Cambion Conception",
        type: "item",
      },{
        id:3,
        name:"Box of Friends",
        type:"item"
      }
    ],
    itemsTainted:[{
      id:1,
      name:"Fetal Fury",
      type:"text"
    },
    {
      id:2,
      name:"Gello",
      type:"item"
    }]
  },
  {
    id: 13,
    name: "Keeper",
    life: 3,
    attack: 2,
    speed: 1,
    items: [
      {
        id: 1,
        name: "Wooden Nickel",
        type: "item",
      },
      {
        id: 2,
        name: "Store Key",
        type: "trinket",
      },
    ],
    itemsTainted:[{
      id:1,
      name:"Better Shops",
      type:"text"
    },
    {
      id:2,
      name:"Greed is Good",
      type:"text"
    }]
  },
  {
    id: 14,
    name: "Apollyon",
    life: 2,
    attack: 2,
    speed: 2,
    items: [
      {
        id: 1,
        name: "Void",
        type: "item",
      },
    ],
    itemsTainted:[{
      id:1,
      name:"Plague Bringer",
      type:"text"
    },
    {
      id:2,
      name:"Abyss",
      type:"item"
    }]
  },
  {
    id: 15,
    name: "The_Forgotten",
    life: -1,
    attack: 4,
    speed: 2,
    itemsTainted:[{
      id:1,
      name:"Dead Weight",
      type:"text"
    },]
  },
  {
    id: 16,
    name: "Bethany",
    life: 3,
    attack: 2,
    speed: 2,
    items: [
      {
        id: 1,
        name: "Book of Virtues",
        type: "item",
      },
    ],
    itemsTainted:[{
      id:1,
      name:"Blood Power",
      type:"text"
    },
    {
      id:2,
      name:"Weaker Items",
      type:"text"
    },
    {
      id:3,
      name:"Lemegeton",
      type:"item"
    }]
  },
  {
    id: 17,
    name: "Jacob_Esau",
    life: 5,
    attack: 5,
    speed: 2,
    itemsTainted:[{
      id:1,
      name:"Repent for Your Sins",
      type:"text"
    },
    {
      id:2,
      name:"Anima Sola",
      type:"item"
    },]
  },
];
