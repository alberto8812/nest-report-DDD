import { Injectable } from "@nestjs/common";
import { IOrmOrderdetailsRepository } from "./orm-orderdetails.interface";
import { PrismaService } from "src/commons/infrastructure/config-database";
import { IGetOrder_detailsRepositoryDto } from "../../dto/Order_details-repository.dto";

@Injectable()
export class OrmOrderdetailsRepository implements IOrmOrderdetailsRepository {

    constructor(private readonly prisma: PrismaService) { }
    getAllOrderdetails(): Promise<IGetOrder_detailsRepositoryDto[]> {
        throw new Error("Method not implemented.");
    }
    getOrderdetailsById(orderdetailsId: number): Promise<IGetOrder_detailsRepositoryDto> {
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