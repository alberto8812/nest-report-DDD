import { IEmpleyesRepositoryDto, IGetEmpleyesRepositoryDto } from "../../dto";
import { ICountryRepositoryDto, IGetCountryRepositoryDto } from "../../dto/country-repository.dto";
import { IGetCustomersRepositoryDto } from "../../dto/Customers-repository.dto";


export interface IOrmCustumersRepository {
    getAllCustumers(): Promise<IGetCustomersRepositoryDto[]>;
    getCustumersById(CustumersId: number): Promise<IGetCustomersRepositoryDto>;
}