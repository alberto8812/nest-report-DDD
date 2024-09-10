import { Module } from '@nestjs/common';
import { BasicReportsService } from './basic-reports.service';
import { BasicReportsController } from './insfrastructure/basic-reports.controller';
import { BasicReportUseCaseService } from './aplication/employes-use-case.service';

@Module({
  controllers: [BasicReportsController],
  providers: [BasicReportsService, BasicReportUseCaseService],
})
export class BasicReportsModule { }
