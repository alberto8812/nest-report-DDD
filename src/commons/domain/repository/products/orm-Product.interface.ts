import { IEmpleyesRepositoryDto, IGetEmpleyesRepositoryDto } from "../../dto";
import { ICountryRepositoryDto, IGetCountryRepositoryDto } from "../../dto/country-repository.dto";
import { IGetProductsRepositoryDto } from "../../dto/Products-repository.dto copy";


export interface IOrmProductRepository {
    getAllProducts(): Promise<IGetProductsRepositoryDto[]>;
    getProductById(productId: number): Promise<IGetProductsRepositoryDto>;
}