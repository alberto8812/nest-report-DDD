import { Inject, Injectable } from "@nestjs/common";
import { IEmployesRepositoryModel, ISaveEmployesRepositoryModel } from "../model/ICountryRepositoryModel";
import { IcrudBasicReportRepository } from "./basicRepor.Interface";
import { OrmBasicReportsRepository } from "src/commons/domain/repository/basic-reports/orm-basic-reports.repository";
import { IOrmEmployeesRepository } from "src/commons/domain/repository/basic-reports/orm-product.repositor.interface";
import { ICountryRepositoryModel } from "../model/IEmployesRepositoryModel";
import { OrmCountryRepository } from "src/commons/domain/repository/country/orm-country.repository";
import { IOrmCountryRepository } from "src/commons/domain/repository/country/orm-country.interface";

@Injectable()
export class BasicReportsRepository implements IcrudBasicReportRepository {

    constructor(
        @Inject(OrmBasicReportsRepository)
        private readonly ormBasicReportsRepository: IOrmEmployeesRepository,
        @Inject(OrmCountryRepository)
        private readonly ormCountryRepository: IOrmCountryRepository
    ) { }
    async getAllContinentsCountries(continents: string): Promise<ICountryRepositoryModel[]> {
        const countries = await this.ormCountryRepository.getAllContinentsCiuntries(continents)
        return countries;
    }

    async getAllCountries(): Promise<ICountryRepositoryModel[]> {
        const employee = await this.ormCountryRepository.getAllCiuntries()
        return employee;
    }
    async getAllEmployeeById(employeeid: number): Promise<IEmployesRepositoryModel> {
        const employee = await this.ormBasicReportsRepository.getEmployeById(employeeid)
        return employee
    }


    async getAllEmployes(): Promise<IEmployesRepositoryModel[]> {
        const allEmployes = await this.ormBasicReportsRepository.getAllEmployes()
        return allEmployes
    }
    saveEmployes(): Promise<ISaveEmployesRepositoryModel> {
        throw new Error("Method not implemented.");
    }

}