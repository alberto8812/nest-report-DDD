import { Injectable } from "@nestjs/common";
import { IOrmProductRepository } from "./orm-Product.interface";
import { PrismaService } from "src/commons/infrastructure/config-database";
import { IGetCountryRepositoryDto, ICountryRepositoryDto } from "../../dto/country-repository.dto";
import { Continent } from "../../entitites";
import { continents } from "@prisma/client";
import { IGetProductsRepositoryDto } from "../../dto/Products-repository.dto copy";

@Injectable()
export class OrmProductRepository implements IOrmProductRepository {

    constructor(private readonly prisma: PrismaService) { }
    getAllProducts(): Promise<IGetProductsRepositoryDto[]> {
        throw new Error("Method not implemented.");
    }
    getProductById(productId: number): Promise<IGetProductsRepositoryDto> {
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