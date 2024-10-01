import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { ExtraReportService } from '../aplication/extra-report.service';


@Controller('extra-report')
export class ExtraReportController {
  constructor(private readonly extraReportService: ExtraReportService) {



  }
  @Get('html-report')
  async getHtmlReport(@Res() response: Response) {
    const pdfDoc = await this.extraReportService.getHtmlReport();
    response.setHeader('Content-Type', 'application/pdf');
    pdfDoc.info.Title = 'Svg-Chart-Report';
    pdfDoc.pipe(response);
    pdfDoc.end();
  }
  @Get('community-report')
  async getCommunityReport(@Res() response: Response) {
    const pdfDoc = await this.extraReportService.getCommunityReport();
    response.setHeader('Content-Type', 'application/pdf');
    pdfDoc.info.Title = 'Bill-report';
    pdfDoc.pipe(response);
    pdfDoc.end();
  }
}
