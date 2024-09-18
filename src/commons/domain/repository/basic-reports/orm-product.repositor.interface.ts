import { IEmpleyesRepositoryDto, IGetEmpleyesRepositoryDto } from "../../dto";


export interface IOrmEmployeesRepository {
    getAllEmployes(): Promise<IGetEmpleyesRepositoryDto[]>;
    getEmployeById(employeeid: number): Promise<IGetEmpleyesRepositoryDto>;
    saveEmploye(newProduct: IEmpleyesRepositoryDto): Promise<void>;
}