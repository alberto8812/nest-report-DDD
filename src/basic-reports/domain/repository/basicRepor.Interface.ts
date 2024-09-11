import { IEmployesRepositoryModel, ISaveEmployesRepositoryModel } from "../model/IEmployesRepositoryModel";



export interface IcrudBasicReportRepository {
    getAllEmployes(): Promise<IEmployesRepositoryModel[]>;
    saveEmployes(): Promise<ISaveEmployesRepositoryModel>;
}