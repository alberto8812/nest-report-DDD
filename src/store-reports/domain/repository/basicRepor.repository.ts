import { Inject, Injectable } from "@nestjs/common";
import { IcrudStoreReportRepository } from "./store-reports.Interface";
import { OrmOrderRepository } from "src/commons/domain/repository/orders/orm-country.repository";
import { IOrmOrderRepository } from "src/commons/domain/repository/orders/orm-country.interface";
import { IGetCountryRepositoryDto } from "src/commons/domain/dto/country-repository.dto";


@Injectable()
export class BasicReportsRepository implements IcrudStoreReportRepository {

    constructor(
        @Inject(OrmOrderRepository)
        private readonly ormOrderRepository: IOrmOrderRepository
    ) { }
    async getStatistics(): Promise<CountryCustomerStats[]> {
        const order = await this.ormOrderRepository.getStatistics();
        return order;
    }
    async getOrderByReportByOrderId(orderId: string): Promise<any> {
        const order = await this.ormOrderRepository.getOrdersById(Number(orderId));
        return order;
    }


}