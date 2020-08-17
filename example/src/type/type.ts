interface commonParam{
    x?:number,
    y?:number,
    zIndex?:number
}
export interface ImageParam extends commonParam {
    src:string,
    width?:number,
    height?:number
}
export interface RectParams extends commonParam {
    stroke?:string,
    strokeWidth?:number,
    fill?:string,
    width?:number,
    height?:number,
    shadowColor?:string,
    shadowBlur?:number,
    shadowOffsetX?:number,
    shadowOffsetY?:number,
    shadowOpacity?:number,
    cornerRadius?:number,
}
export interface TextParams extends commonParam{
    text:string,
    fontSize?:number,
    fontFamily?:string,
    fill?:string,
    width?:number,
    padding?:number,
    align ?:string,
}

export interface page {
    id: string; 
    width: number; 
    height: number; 
    overlays: (
        { 
            id: string; 
            iType: string; 
            message: { 
                text?: string; 
                x: number; 
                y: number; 
                src?: string;
                width?:number,
                height?:number 
            }
        } 
        // | { 
        //     id: string; 
        //     iType: string; 
        //     message: { 
        //         src: string; 
        //         x: number; 
        //         y: number; 
        //         text?: undefined 
        //     } 
        // }
    )[] 
}