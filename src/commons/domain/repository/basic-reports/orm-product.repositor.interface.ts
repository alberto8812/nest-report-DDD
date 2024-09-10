import { IEmpleyesRepositoryDto, IGetEmpleyesRepositoryDto } from "../../dto";


export interface IOrmEmployeesRepository {
    getAllEmployes(): Promise<IGetEmpleyesRepositoryDto[]>;
    saveEmploye(newProduct: IEmpleyesRepositoryDto): Promise<void>;
}