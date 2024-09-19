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
}
