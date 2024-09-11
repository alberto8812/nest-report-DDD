import { Inject, Injectable } from "@nestjs/common";
import { IEmployesRepositoryModel, ISaveEmployesRepositoryModel } from "../model/IEmployesRepositoryModel";
import { IcrudBasicReportRepository } from "./basicRepor.Interface";
import { OrmBasicReportsRepository } from "src/commons/domain/repository/basic-reports/orm-basic-reports.repository";
import { IOrmEmployeesRepository } from "src/commons/domain/repository/basic-reports/orm-product.repositor.interface";

@Injectable()
export class BasicReportsRepository implements IcrudBasicReportRepository {

    constructor(
        @Inject(OrmBasicReportsRepository)
        private readonly ormBasicReportsRepository: IOrmEmployeesRepository
    ) { }


    async getAllEmployes(): Promise<IEmployesRepositoryModel[]> {
        const allEmployes = await this.ormBasicReportsRepository.getAllEmployes()
        return allEmployes
    }
    saveEmployes(): Promise<ISaveEmployesRepositoryModel> {
        throw new Error("Method not implemented.");
    }

}