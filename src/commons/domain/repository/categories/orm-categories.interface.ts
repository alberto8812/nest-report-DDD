
import { IGetCategoriesRepositoryDto } from "../../dto/categories-repository.dto";



export interface IOrmCategoryRepository {
    getAllCategories(): Promise<IGetCategoriesRepositoryDto[]>;
    getCategoriesById(vategoryId: number): Promise<IGetCategoriesRepositoryDto>;

}