import { Continent } from "../entitites";

export interface ICustomersRepositoryDto {
    customer_name?: string
    contact_name?: string
    address?: string
    city?: string
    postal_code?: string
    country?: string

}

export interface IGetCustomersRepositoryDto extends ICustomersRepositoryDto {
    customer_id: number
}