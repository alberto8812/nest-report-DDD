import { Continent } from "../entitites";

export interface ICategoriesRepositoryDto {
    category_name?: string,
    description?: string,

}

export interface IGetCategoriesRepositoryDto extends ICategoriesRepositoryDto {
    category_id: bigint
}