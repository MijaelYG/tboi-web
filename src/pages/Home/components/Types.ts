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

export interface InfoCardType{
    id:number;
    width:number;
    height:number;
    typeCard:string;
    info_img?:string[];
    text:string;
    card_img:string;
    totalCard: number;
    top?:number;
    bottom?:number;
    left?:number;
    right?:number;
    moveX:[number,number,number,number] ;
    moveY:[number,number,number,number] ;
}

export interface Section{
    id:number;
    shadow: string;
    name:string;
    pixelSprite: PixelSprite[];
}

