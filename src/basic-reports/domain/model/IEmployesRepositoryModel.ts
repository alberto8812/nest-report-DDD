import { Continent } from "src/commons/domain/entitites";


export interface ICountryRepositoryModel {
    id: bigint;
    name: string;
    iso2: string;
    iso3: string;
    local_name: string;
    continent: Continent;
}

export type ISaveEmployesRepositoryModel = Omit<ICountryRepositoryModel, 'id'>