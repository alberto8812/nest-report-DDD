import { Inject, Injectable } from '@nestjs/common';
import { IuseCaseStoreReportService } from './sotre-reports-use-case.interface';
import { PrinterService } from 'src/printer/printer.service';
import { IcrudStoreReportRepository } from '../domain/repository/store-reports.Interface';
import { BasicReportsRepository } from '../domain/repository/basicRepor.repository';
import { gethelloWorldReport } from 'src/reports/hello-word.reports';
import { getBaiscChartSvg, getStatisticsReport, orderByIDReport } from 'src/reports';
import { IOrder_detailsRepositoryDto } from 'src/commons/domain/dto/Order_details-repository.dto';

@Injectable()
export class StoreReportsService implements IuseCaseStoreReportService {
    constructor(
        @Inject(BasicReportsRepository)
        private readonly basicReportsRepository: IcrudStoreReportRepository,
        private readonly printerService: PrinterService
    ) { }
    async getStatistics(): Promise<any> {

        const countryReport = await this.basicReportsRepository.getStatistics();
        console.log(countryReport)
        const topCountries = countryReport.map((country) => {
            return {
                country: country.country,
                customers: country._count
            }
        }
        )


        const docDefinition = await getStatisticsReport({ topCountries });
        const doc = this.printerService.createPdf(docDefinition);
        return doc
    }
    async getSvgChart(): Promise<any> {
        const docDefinition = await getBaiscChartSvg();
        const doc = this.printerService.createPdf(docDefinition);
        return doc
    }
    async getOrderByReportByOrderId(orderId: string): Promise<any> {
        const order = await this.basicReportsRepository.getOrderByReportByOrderId(orderId);
        const docDefinition = orderByIDReport(order);
        const doc = this.printerService.createPdf(docDefinition);
        return doc
    }
}
