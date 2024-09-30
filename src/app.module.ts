import { Module } from '@nestjs/common';
import { BasicReportsModule } from './basic-reports/basic-reports.module';
import { PrinterModule } from './printer/printer.module';
import { StoreReportsModule } from './store-reports/store-reports.module';
import { ExtraReportModule } from './extra-report/extra-report.module';

@Module({
  imports: [BasicReportsModule, PrinterModule, StoreReportsModule, ExtraReportModule],
  controllers: [],
  providers: [],
  exports: []
})
export class AppModule { }
