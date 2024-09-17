import { Inject, Injectable, NotFoundException } from "@nestjs/common";
import { PrinterService } from "src/printer/printer.service";


import { EmpleyesDto } from "../insfrastructure/dto/employes.dto";
import { IResponse, IuseCaseProductService } from "./employes-use-case.interface";
import { BasicReportsRepository } from "../domain/repository/basicRepor.repository";
import { IcrudBasicReportRepository } from "../domain/repository/basicRepor.Interface";
import type { TDocumentDefinitions } from "pdfmake/interfaces";
import { getEmplomentLatterReport } from "src/reports/emploment-letter.report";
import { CountryDto } from "../insfrastructure/dto/country.dto";
import { getCountriesReport, getEmplomentLatterBydIdReport, gethelloWorldReport } from "src/reports";



@Injectable()
export class BasicReportUseCaseService implements IuseCaseProductService {

    constructor(
        @Inject(BasicReportsRepository)
        private readonly basicReportsRepository: IcrudBasicReportRepository,
        private readonly printerService: PrinterService
    ) { }
    async getAllCountries(): Promise<any> {
        const getCountries = await this.basicReportsRepository.getAllCountries()
        const docDefinition = getCountriesReport();
        const doc = this.printerService.createPdf(docDefinition);
        return doc
    }


    async employmenLetterById(employeeid: number): Promise<any> {
        const employee = await this.basicReportsRepository.getAllEmployeeById(employeeid)
        if (!employee) {
            throw new NotFoundException(`Employee with id ${employeeid} not found`)
        }
        const docDefinition = getEmplomentLatterBydIdReport(
            {
                employerName: 'Elon Reeve Musk',
                employerPosition: 'CEO',
                employeeName: 'Liliana Ramos',
                employeePosition: employee.position,
                employeeStartDate: employee.start_date,
                employeeHours: employee.work_time,
                employeeWorkSchedule: employee.work_schedule,
                employerCompany: "La NASA",
            }
        );
        const doc = this.printerService.createPdf(docDefinition);
        return doc
    }

    async employmenLetter(): Promise<any> {
        const docDefinition = getEmplomentLatterReport();
        const doc = this.printerService.createPdf(docDefinition);
        return doc
    }

    async hello(): Promise<any> {

        const docDefinition = gethelloWorldReport();
        const doc = this.printerService.createPdf(docDefinition);
        return doc
    }


    async getAllEmployes(): Promise<EmpleyesDto[]> {
        const getEmployes = await this.basicReportsRepository.getAllEmployes()
        return getEmployes
    }

    saveEmploye(newEmploye: EmpleyesDto): Promise<IResponse> {
        throw new Error("Method not i`mplemented.");
    }

}