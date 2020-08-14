export  interface ImageParam{
    src:string,
    x:number,
    y?:number,
    width?:number,
    height?:number
}
export interface RectParams{
    x:number,
    y?:number,
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
export interface TextParams{
    x?:number,
    y?:number,
    text:string,
    fontSize?:number,
    fontFamily?:string,
    fill?:string,
    width?:number,
    padding?:number,
    align ?:string,
}