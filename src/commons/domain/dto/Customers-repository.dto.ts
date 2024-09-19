import { Continent } from "../entitites";

export interface ICustomersRepositoryDto {
    customer_name?: String
    contact_name?: String
    address?: String
    city?: String
    postal_code?: String
    country?: String

}

export interface IGetCustomersRepositoryDto extends ICustomersRepositoryDto {
    customer_id: number
}