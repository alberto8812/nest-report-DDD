import { Continent } from "../entitites";
import { IGetProductsRepositoryDto } from "./Products-repository.dto copy";

export interface IOrder_detailsRepositoryDto {
    order_id?: number
    product_id?: number
    quantity?: number

}

export interface IGetOrder_detailsRepositoryDto extends IOrder_detailsRepositoryDto {
    order_detail_id: number
    products?: IGetProductsRepositoryDto
}