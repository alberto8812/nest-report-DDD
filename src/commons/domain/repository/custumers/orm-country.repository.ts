import { Injectable } from "@nestjs/common";
import { IOrmCustumersRepository } from "./orm-Custumers.interface";
import { PrismaService } from "src/commons/infrastructure/config-database";
import { IGetCustomersRepositoryDto } from "../../dto/Customers-repository.dto";

@Injectable()
export class OrmCountryRepository implements IOrmCustumersRepository {

    constructor(private readonly prisma: PrismaService) { }
    getAllCustumers(): Promise<IGetCustomersRepositoryDto[]> {
        throw new Error("Method not implemented.");
    }
    getCustumersById(CustumersId: number): Promise<IGetCustomersRepositoryDto> {
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