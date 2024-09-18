import { CountryDto } from "../insfrastructure/dto/country.dto";
import { EmpleyesDto } from "../insfrastructure/dto/employes.dto";


export interface IuseCaseProductService {
    getAllEmployes(): Promise<EmpleyesDto[]>;
    saveEmploye(newEmploye: EmpleyesDto): Promise<IResponse>;
    hello(): Promise<any>;
    employmenLetter(): Promise<any>;
    employmenLetterById(employeeid: number): Promise<any>;


    getAllCountries(): Promise<any>;
    getAllByContinentsCountries(continents: string): Promise<any>;
}

export interface IResponse {
    message: string;
    code: number;
}