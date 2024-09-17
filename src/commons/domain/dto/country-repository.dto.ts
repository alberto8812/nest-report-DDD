import { Continent } from "../entitites";

export interface ICountryRepositoryDto {
    name: string;
    iso2: string;
    iso3: string;
    local_name: string;
    continent: Continent;

}

export interface IGetCountryRepositoryDto extends ICountryRepositoryDto {
    id: bigint
}