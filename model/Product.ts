import { IdType, Identifiable } from "@/types/common-types";

export interface Product extends Identifiable<IdType>{
    name: string,
    nameCamelCase: string,
    imgFolder: string,
    img: string,
    description: string,
    price: number
}