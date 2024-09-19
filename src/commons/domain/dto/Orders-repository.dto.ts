import { Continent } from "../entitites";

export interface IOrdersRepositoryDto {
    customer_id?: number

}

export interface IGetOrdersRepositoryDto extends IOrdersRepositoryDto {
    order_id: number
}