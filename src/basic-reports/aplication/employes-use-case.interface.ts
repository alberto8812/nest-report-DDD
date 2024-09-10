import { EmpleyesDto } from "../insfrastructure/dto/employes.dto";


export interface IuseCaseProductService {
    getAllEmployes(): Promise<EmpleyesDto[]>;
    saveEmploye(newEmploye: EmpleyesDto): Promise<IResponse>;
}

export interface IResponse {
    message: string;
    code: number;
}