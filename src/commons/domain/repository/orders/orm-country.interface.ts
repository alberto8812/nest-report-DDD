
import { IGetOrdersRepositoryDto } from "../../dto/Orders-repository.dto";



export interface IOrmOrderRepository {
    getAllOrders(): Promise<IGetOrdersRepositoryDto[]>;
    getOrdersById(orderId: number): Promise<IGetOrdersRepositoryDto>;
    getStatistics(): Promise<CountryCustomerStats[]>;
}