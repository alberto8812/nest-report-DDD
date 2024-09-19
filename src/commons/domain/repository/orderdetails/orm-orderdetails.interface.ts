import { IEmpleyesRepositoryDto, IGetEmpleyesRepositoryDto } from "../../dto";
import { ICountryRepositoryDto, IGetCountryRepositoryDto } from "../../dto/country-repository.dto";
import { IGetOrder_detailsRepositoryDto } from "../../dto/Order_details-repository.dto";


export interface IOrmOrderdetailsRepository {
    getAllOrderdetails(): Promise<IGetOrder_detailsRepositoryDto[]>;
    getOrderdetailsById(orderdetailsId: number): Promise<IGetOrder_detailsRepositoryDto>;
}