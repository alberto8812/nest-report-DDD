import { Continent } from "src/commons/domain/entitites";

export class CountryDto {
    name: string;
    iso2: string;
    iso3: string;
    local_name: string;
    continent: Continent;
}

