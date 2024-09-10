import { Controller, Get, Inject } from '@nestjs/common';
import { BasicReportsService } from '../basic-reports.service';
import { EmpleyesDto } from './dto/employes.dto';
import { BasicReportUseCaseService } from '../aplication/employes-use-case.service';
import { IuseCaseProductService } from '../aplication/employes-use-case.interface';

@Controller('basic-reports')
export class BasicReportsController {
  constructor(@Inject(BasicReportUseCaseService) private readonly basicReportsService: IuseCaseProductService) { }

  @Get()
  async getEmployes(): Promise<EmpleyesDto[]> {
    return await this.basicReportsService.getAllEmployes()
  }
}
