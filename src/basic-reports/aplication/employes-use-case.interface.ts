import { EmpleyesDto } from "../insfrastructure/dto/employes.dto";


export interface IuseCaseProductService {
    getAllEmployes(): Promise<EmpleyesDto[]>;
    saveEmploye(newEmploye: EmpleyesDto): Promise<IResponse>;
    hello(): Promise<any>;
    employmenLetter(): Promise<any>;
    employmenLetterById(employeeid: number): Promise<any>;
}

export interface IResponse {
    message: string;
    code: number;
}