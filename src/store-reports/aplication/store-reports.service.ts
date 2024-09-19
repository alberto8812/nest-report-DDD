import { Inject, Injectable } from '@nestjs/common';
import { IuseCaseStoreReportService } from './sotre-reports-use-case.interface';
import { PrinterService } from 'src/printer/printer.service';
import { IcrudStoreReportRepository } from '../domain/repository/store-reports.Interface';
import { BasicReportsRepository } from '../domain/repository/basicRepor.repository';
import { gethelloWorldReport } from 'src/reports/hello-word.reports';

@Injectable()
export class StoreReportsService implements IuseCaseStoreReportService {
    constructor(
        @Inject(BasicReportsRepository)
        private readonly basicReportsRepository: IcrudStoreReportRepository,
        private readonly printerService: PrinterService
    ) { }
    async getOrderByReportByOrderId(orderId: string): Promise<any> {
        console.log('test')
        const docDefinition = gethelloWorldReport();
        const doc = this.printerService.createPdf(docDefinition);
        return doc
    }
}
