import { IOrder_detailsRepositoryDto } from "src/commons/domain/dto/Order_details-repository.dto";
import { IGetOrdersRepositoryDto } from "src/commons/domain/dto/Orders-repository.dto";


export interface IcrudStoreReportRepository {
    getOrderByReportByOrderId(orderId: string): Promise<IGetOrdersRepositoryDto>;
}