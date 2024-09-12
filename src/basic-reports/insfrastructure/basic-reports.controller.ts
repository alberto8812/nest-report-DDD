import { Controller, Get, Inject, Res } from '@nestjs/common';
import { EmpleyesDto } from './dto/employes.dto';
import { BasicReportUseCaseService } from '../aplication/employes-use-case.service';
import { IuseCaseProductService } from '../aplication/employes-use-case.interface';
import { response, Response } from 'express';

@Controller('basic-reports')
export class BasicReportsController {
  constructor(@Inject(BasicReportUseCaseService) private readonly basicReportsService: IuseCaseProductService) { }

  @Get()
  async getEmployes(): Promise<EmpleyesDto[]> {
    return await this.basicReportsService.getAllEmployes()
  }
  @Get('/pdf')
  async hello(@Res() response: Response): Promise<any> {
    const pdfDoc = await this.basicReportsService.hello()
    response.setHeader('Content-Type', 'application/pdf');
    pdfDoc.info.Title = 'Hola-Mundo';
    pdfDoc.pipe(response);
    pdfDoc.end();
  }
  @Get('employment-letter')
  async employmenLetter(@Res() response: Response): Promise<any> {
    const pdfDoc = await this.basicReportsService.employmenLetter()
    response.setHeader('Content-Type', 'application/pdf');
    pdfDoc.info.Title = 'Hola-Mundo';
    pdfDoc.pipe(response);
    pdfDoc.end();
  }
}
