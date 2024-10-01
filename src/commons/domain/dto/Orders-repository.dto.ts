import { Continent } from "../entitites";
import { IGetCustomersRepositoryDto } from "./Customers-repository.dto";
import { IGetOrder_detailsRepositoryDto } from "./Order_details-repository.dto";

export interface IOrdersRepositoryDto {
    customer_id?: number

}

export interface IGetOrdersRepositoryDto extends IOrdersRepositoryDto {
    order_id: number
    order_details?: IGetOrder_detailsRepositoryDto[]
    customers?: IGetCustomersRepositoryDto
}