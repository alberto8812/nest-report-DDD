import { Controller, Get, Inject, Param, Res } from '@nestjs/common';
import { StoreReportsService } from '../aplication/store-reports.service';
import { IuseCaseStoreReportService } from '../aplication/sotre-reports-use-case.interface';
import { Response } from 'express';

@Controller('store-reports')
export class StoreReportsController {
  constructor(
    @Inject(StoreReportsService)
    private readonly storeReportsService: IuseCaseStoreReportService
  ) { }

  @Get('order/:orderId')
  async getOrderReport(@Res() response: Response, @Param('orderId') orderId: string) {
    const pdfDoc = await this.storeReportsService.getOrderByReportByOrderId(orderId);
    response.setHeader('Content-Type', 'application/pdf');
    pdfDoc.info.Title = 'Hola-Mundo';
    pdfDoc.pipe(response);
    pdfDoc.end();
  }

  @Get('svgs-charts')
  async getSvgGrap(@Res() response: Response) {
    const pdfDoc = await this.storeReportsService.getSvgChart();
    response.setHeader('Content-Type', 'application/pdf');
    pdfDoc.info.Title = 'Svg-Chart-Report';
    pdfDoc.pipe(response);
    pdfDoc.end();
  }
  @Get('svgs-charts/statistics')
  async statistics(@Res() response: Response) {
    const pdfDoc = await this.storeReportsService.getStatistics();
    response.setHeader('Content-Type', 'application/pdf');
    pdfDoc.info.Title = 'Statistics-Report';
    pdfDoc.pipe(response);
    pdfDoc.end();
  }
}
