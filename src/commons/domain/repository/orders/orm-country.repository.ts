import { Injectable } from "@nestjs/common";
import { IOrmOrderRepository } from "./orm-country.interface";
import { PrismaService } from "src/commons/infrastructure/config-database";
import { IGetOrdersRepositoryDto } from "../../dto/Orders-repository.dto";

@Injectable()
export class OrmOrderRepository implements IOrmOrderRepository {

    constructor(private readonly prisma: PrismaService) { }
    getAllOrders(): Promise<IGetOrdersRepositoryDto[]> {
        throw new Error("Method not implemented.");
    }
    getOrdersById(orderId: number): Promise<IGetOrdersRepositoryDto> {
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