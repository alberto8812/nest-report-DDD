import { IEmployesRepositoryModel, ISaveEmployesRepositoryModel } from "../model/ICountryRepositoryModel";
import { ICountryRepositoryModel } from "../model/IEmployesRepositoryModel";



export interface IcrudBasicReportRepository {
    getAllEmployes(): Promise<IEmployesRepositoryModel[]>;
    getAllEmployeeById(employeeid: number): Promise<IEmployesRepositoryModel>;
    saveEmployes(): Promise<ISaveEmployesRepositoryModel>;

    getAllCountries(): Promise<ICountryRepositoryModel[]>;
    getAllContinentsCountries(continents: string): Promise<ICountryRepositoryModel[]>;
}