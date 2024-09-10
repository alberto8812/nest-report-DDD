import { Injectable } from "@nestjs/common";
import { EmpleyesDto } from "../insfrastructure/dto/employes.dto";
import { IResponse, IuseCaseProductService } from "./employes-use-case.interface";

@Injectable()
export class BasicReportUseCaseService implements IuseCaseProductService {
    getAllEmployes(): Promise<EmpleyesDto[]> {
        throw new Error("Method not implemented.");
    }
    saveEmploye(newEmploye: EmpleyesDto): Promise<IResponse> {
        throw new Error("Method not implemented.");
    }

}