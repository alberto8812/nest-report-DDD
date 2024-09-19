import { Injectable } from "@nestjs/common";

import { PrismaService } from "src/commons/infrastructure/config-database";
import { IGetCountryRepositoryDto, ICountryRepositoryDto } from "../../dto/country-repository.dto";
import { Continent } from "../../entitites";
import { continents } from "@prisma/client";
import { IOrmCategoryRepository } from "./orm-categories.interface";
import { IGetCategoriesRepositoryDto } from "../../dto/categories-repository.dto";

@Injectable()
export class OrmCountryRepository implements IOrmCategoryRepository {

    constructor(private readonly prisma: PrismaService) { }
    getAllCategories(): Promise<IGetCategoriesRepositoryDto[]> {
        throw new Error("Method not implemented.");
    }
    getCategoriesById(vategoryId: number): Promise<IGetCategoriesRepositoryDto> {
        throw new Error("Method not implemented.");
    }
    // async getAllContinentsCiuntries(continents: string): Promise<IGetCountryRepositoryDto[]> {
    //     const countries = await this.prisma.countries.findMany(
    //         {
    //             where: {
    //                 local_name: {
    //                     not: null
    //                 },
    //                 continent: {
    //                     equals: continents as continents,  // Usa el filtro "equals" si es un enum
    //                 },
    //             }
    //         }
    //     )
    //     return countries.map(country => {

    //         return {
    //             ...country,
    //             continent: this.MapContienet(country.continent)
    //         }
    //     })
    // }



}