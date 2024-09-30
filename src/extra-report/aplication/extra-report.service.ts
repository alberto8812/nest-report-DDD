import { Injectable } from '@nestjs/common';
import { PrinterService } from 'src/printer/printer.service';
import { gethelloWorldReport } from 'src/reports';

@Injectable()
export class ExtraReportService {
    constructor(
        private readonly printerService: PrinterService
    ) { }
    async getHtmlReport(): Promise<any> {
        const docDefinition = gethelloWorldReport();
        const doc = this.printerService.createPdf(docDefinition);
        return Promise.resolve(doc);
    }
}
