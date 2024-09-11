import { Inject, Injectable } from "@nestjs/common";
import { PrinterService } from "src/printer/printer.service";


import { EmpleyesDto } from "../insfrastructure/dto/employes.dto";
import { IResponse, IuseCaseProductService } from "./employes-use-case.interface";
import { BasicReportsRepository } from "../domain/repository/basicRepor.repository";
import { IcrudBasicReportRepository } from "../domain/repository/basicRepor.Interface";
import type { TDocumentDefinitions } from "pdfmake/interfaces";
import { gethelloWorldReport } from "src/reports";


@Injectable()
export class BasicReportUseCaseService implements IuseCaseProductService {

    constructor(
        @Inject(BasicReportsRepository)
        private readonly basicReportsRepository: IcrudBasicReportRepository,
        private readonly printerService: PrinterService
    ) { }

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