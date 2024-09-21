import { Inject, Injectable } from "@nestjs/common";
import { IcrudStoreReportRepository } from "./store-reports.Interface";
import { OrmOrderRepository } from "src/commons/domain/repository/orders/orm-country.repository";
import { IOrmOrderRepository } from "src/commons/domain/repository/orders/orm-country.interface";


@Injectable()
export class BasicReportsRepository implements IcrudStoreReportRepository {

    constructor(
        @Inject(OrmOrderRepository)
        private readonly ormOrderRepository: IOrmOrderRepository
    ) { }
    async getOrderByReportByOrderId(orderId: string): Promise<any> {
        const order = await this.ormOrderRepository.getOrdersById(Number(orderId));
        return order;
    }


}