import { Inject, Injectable } from "@nestjs/common";
import { EmpleyesDto } from "../insfrastructure/dto/employes.dto";
import { IResponse, IuseCaseProductService } from "./employes-use-case.interface";
import { BasicReportsRepository } from "../domain/repository/basicRepor.repository";
import { IcrudBasicReportRepository } from "../domain/repository/basicRepor.Interface";

@Injectable()
export class BasicReportUseCaseService implements IuseCaseProductService {

    constructor(
        @Inject(BasicReportsRepository)
        private readonly basicReportsRepository: IcrudBasicReportRepository
    ) { }
    async getAllEmployes(): Promise<EmpleyesDto[]> {
        const getEmployes = await this.basicReportsRepository.getAllEmployes()
        return getEmployes
    }
    saveEmploye(newEmploye: EmpleyesDto): Promise<IResponse> {
        throw new Error("Method not implemented.");
    }

}