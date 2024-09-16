import { IEmployesRepositoryModel, ISaveEmployesRepositoryModel } from "../model/IEmployesRepositoryModel";



export interface IcrudBasicReportRepository {
    getAllEmployes(): Promise<IEmployesRepositoryModel[]>;
    getAllEmployeeById(employeeid: number): Promise<IEmployesRepositoryModel>;
    saveEmployes(): Promise<ISaveEmployesRepositoryModel>;
}