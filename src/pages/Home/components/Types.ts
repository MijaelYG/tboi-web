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
}

export interface Sprite{
    width:number;
    height:number;
    sprite_bg_img:string;
    sprites:number;
}

export interface InfoCardType{
    id:number;
    width:number;
    height:number;
    typeCard:string;
    info_img?:Sprite[];
    text:string;
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

