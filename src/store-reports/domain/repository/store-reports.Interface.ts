import { IGetCountryRepositoryDto } from "src/commons/domain/dto/country-repository.dto";
import { IGetOrdersRepositoryDto } from "src/commons/domain/dto/Orders-repository.dto";


export interface IcrudStoreReportRepository {
    getOrderByReportByOrderId(orderId: string): Promise<IGetOrdersRepositoryDto>;
    getStatistics(): Promise<CountryCustomerStats[]>;
}