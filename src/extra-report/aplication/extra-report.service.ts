import { Injectable } from '@nestjs/common';
import { PrinterService } from 'src/printer/printer.service';
import { getCommunityReport, gethelloWorldReport } from 'src/reports';
import * as fs from 'fs';

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
    async getCommunityReport(): Promise<any> {
        const docDefinition = getCommunityReport();
        const doc = this.printerService.createPdf(docDefinition);
        return Promise.resolve(doc);


    }
}
