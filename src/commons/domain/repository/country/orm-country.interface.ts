import { IEmpleyesRepositoryDto, IGetEmpleyesRepositoryDto } from "../../dto";
import { ICountryRepositoryDto, IGetCountryRepositoryDto } from "../../dto/country-repository.dto";


export interface IOrmCountryRepository {
    getAllCiuntries(): Promise<IGetCountryRepositoryDto[]>;
    getCountryById(countryid: number): Promise<IGetCountryRepositoryDto>;
    saveCountry(newProduct: ICountryRepositoryDto): Promise<void>;
}