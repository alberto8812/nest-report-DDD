import { Module } from '@nestjs/common';
import { StoreReportsService } from './aplication/store-reports.service';
import { StoreReportsController } from './infractructure/store-reports.controller';
import { PrinterModule } from 'src/printer/printer.module';
import { OrmOrderRepository } from 'src/commons/domain/repository/orders/orm-country.repository';
import { BasicReportsRepository } from './domain/repository/basicRepor.repository';
import { PrismaService } from 'src/commons/infrastructure/config-database';

@Module({
  controllers: [StoreReportsController],
  providers: [
    StoreReportsService,
    OrmOrderRepository,
    BasicReportsRepository,
    PrismaService
  ],
  imports: [PrinterModule]
})
export class StoreReportsModule { }
