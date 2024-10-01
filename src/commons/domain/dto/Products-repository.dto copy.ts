import { Continent } from "../entitites";

export interface IProductsRepositoryDto {
    product_name?: string
    category_id?: number
    unit?: string
    price?: number
}

export interface IGetProductsRepositoryDto extends IProductsRepositoryDto {
    product_id: number
}