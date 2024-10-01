import { Module } from '@nestjs/common';
import { ExtraReportService } from './aplication/extra-report.service';
import { ExtraReportController } from './infractructure/extra-report.controller';
import { PrinterModule } from 'src/printer/printer.module';


@Module({
  controllers: [ExtraReportController],
  providers: [ExtraReportService],
  imports: [PrinterModule]
})
export class ExtraReportModule { }
