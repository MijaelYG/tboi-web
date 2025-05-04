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

export interface PixelSpriteBg{
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

export interface PixelSpriteStatic{
    width:number;
    height:number;
    sprite_bg_img:string;
    sprites:number;
    name?: string;
}

export interface PixelStatic{
    width:number;
    height:number;
    img:string;
    top?:number;
    bottom?:number;
    left?:number;
    right?:number;
    scaleX?:number;
}

export interface InfoCardType{
    id:number;
    width:number;
    height:number;
    typeCard:string;
    info_img?:PixelSpriteStatic[];
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
    pixelSprite?: PixelSpriteBg[];
    infoCard?:InfoCardType[];
}

export interface items{
    id:number;
    name: string;
    type: string;
}

export interface items_tainted{
    id:number;
    name: string;
    type: string;
}
export interface characters{
    id:number;
    name?: string;
    life: number;
    items?:items[];
    attack:number;
    speed:number;
    itemsTainted?: items_tainted[];
}
