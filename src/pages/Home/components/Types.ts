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

export interface Section{
    id:number;
    shadow: string;
    name:string;
    pixelSprite: PixelSprite[];
}

export interface InfoCard{
    width:number;
    height:number;
    info_img:[string,string] | string;
    text:string;
    background_img:string;
    typeCard:string;
    top?:number;
    bottom?:number;
    left?:number;
    right?:number;
    moveX:[number,number,number,number] | [number,number];
    moveY:[number,number,number,number] | [number,number];
}