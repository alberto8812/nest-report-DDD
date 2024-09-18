import { Module } from '@nestjs/common';
import { BasicReportsController } from './insfrastructure/basic-reports.controller';
import { BasicReportUseCaseService } from './aplication/employes-use-case.service';
import { BasicReportsRepository } from './domain/repository/basicRepor.repository';
import { OrmBasicReportsRepository } from 'src/commons/domain/repository/basic-reports/orm-basic-reports.repository';
import { PrismaService } from 'src/commons/infrastructure/config-database';
import { PrinterModule } from 'src/printer/printer.module';
import { OrmCountryRepository } from 'src/commons/domain/repository/country/orm-country.repository';

@Module({
  controllers: [BasicReportsController],
  providers: [
    BasicReportUseCaseService,
    OrmBasicReportsRepository,
    OrmCountryRepository,
    BasicReportsRepository,
    PrismaService],
  imports: [PrinterModule]
})
export class BasicReportsModule { }
