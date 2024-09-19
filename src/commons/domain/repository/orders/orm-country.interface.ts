import { IEmpleyesRepositoryDto, IGetEmpleyesRepositoryDto } from "../../dto";
import { ICountryRepositoryDto, IGetCountryRepositoryDto } from "../../dto/country-repository.dto";
import { IGetOrdersRepositoryDto } from "../../dto/Orders-repository.dto";


export interface IOrmOrderRepository {
    getAllOrders(): Promise<IGetOrdersRepositoryDto[]>;
    getOrdersById(orderId: number): Promise<IGetOrdersRepositoryDto>;
}