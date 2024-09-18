import { Injectable } from "@nestjs/common";
import { IGetEmpleyesRepositoryDto, IEmpleyesRepositoryDto } from "../../dto";
import { IOrmEmployeesRepository } from "./orm-product.repositor.interface";
import { PrismaService } from "src/commons/infrastructure/config-database";

@Injectable()
export class OrmBasicReportsRepository implements IOrmEmployeesRepository {

    constructor(private readonly prisma: PrismaService) { }


    async getEmployeById(employeeid: number): Promise<IGetEmpleyesRepositoryDto> {
        return await this.prisma.employees.findUnique(
            {
                where: {
                    id: employeeid
                }
            }
        )
    }


    async getAllEmployes(): Promise<IGetEmpleyesRepositoryDto[]> {
        return await this.prisma.employees.findMany();
    }
    async saveEmploye(newProduct: IEmpleyesRepositoryDto): Promise<void> {
        // await this.prisma.employees.create({ 
        //     data: newProduct,
        // });
    }

}