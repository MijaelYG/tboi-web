export interface ShadowSprite{
    width:number;
    height:number;
    shadow_img:string;
    top?:number;
    left?:number;
    right?:number;
    bottom: number;
    animation:[number,number];
    sprites:number;
}

export interface PixelSprite{
    width:number;
    height:number;
    background_img:string;
    top?:number;
    bottom?:number;
    left?:number;
    right?:number;
    animation:[number,number];
    x?:number;
    y?:number;
    sprites:number;
    shadow?: ShadowSprite;
    scaleX?:number;
}

export interface Sprite{
    width:number;
    height:number;
    sprite_bg_img:string;
    sprites:number;
    name?: string;
}

export interface InfoCardType{
    id:number;
    width:number;
    height:number;
    typeCard:string;
    info_img?:Sprite[];
    text?:string;
    bg_img:string;
    totalCard: number;
    top?:number;
    bottom?:number;
    left?:number;
    right?:number;
    moveX?:[number,number] ;
    moveY?:[number,number] ;
}

export interface Section{
    id:number;
    shadow: string;
    name:string;
    pixelSprite?: PixelSprite[];
    infoCard?:InfoCardType[];
}


export interface characters{
    id:number;
    name?: string;
    characterCard_img?:string;
    characterPixel_img?:string;
}
