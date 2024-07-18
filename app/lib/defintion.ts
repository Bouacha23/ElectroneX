

export interface shopLink {
    id : number ,
    name : string,
    href : string 
}

export interface products {
    id: 1 
}


export interface ButtonProps  {
    lable : string ;
    onClick ?: () => void;
    style ?:string
}

export interface FormInput {
    style ?: string ,
    placeholder : string ,
    type : string
}

export type detilse =   {
    id : string
}