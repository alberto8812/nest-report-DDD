import { Injectable } from "@nestjs/common";
import { IOrmCountryRepository } from "./orm-country.interface";
import { PrismaService } from "src/commons/infrastructure/config-database";
import { IGetCountryRepositoryDto, ICountryRepositoryDto } from "../../dto/country-repository.dto";
import { Continent } from "../../entitites";
import { continents } from "@prisma/client";

@Injectable()
export class OrmCountryRepository implements IOrmCountryRepository {

    constructor(private readonly prisma: PrismaService) { }
    async getAllContinentsCiuntries(continents: string): Promise<IGetCountryRepositoryDto[]> {
        const countries = await this.prisma.countries.findMany(
            {
                where: {
                    local_name: {
                        not: null
                    },
                    continent: {
                        equals: continents as continents,  // Usa el filtro "equals" si es un enum
                    },
                }
            }
        )
        return countries.map(country => {

            return {
                ...country,
                continent: this.MapContienet(country.continent)
            }
        })
    }

    async getAllCiuntries(): Promise<IGetCountryRepositoryDto[]> {
        const countries = await this.prisma.countries.findMany(
            {
                where: {
                    local_name: {
                        not: null
                    }
                }
            }
        )
        return countries.map(country => {

            return {
                ...country,
                continent: this.MapContienet(country.continent)
            }
        })
    }
    async getCountryById(countryid: number): Promise<IGetCountryRepositoryDto> {
        const country = await this.prisma.countries.findUnique(
            {
                where: {
                    id: countryid
                }
            }
        )
        return {
            ...country,
            continent: this.MapContienet(country.continent)
        }
    }
    saveCountry(newProduct: ICountryRepositoryDto): Promise<void> {
        throw new Error("Method not implemented.");
    }

    private MapContienet(continent: continents): Continent {
        switch (continent) {
            case 'Africa':
                return Continent.Africa;
            case 'Antarctica':
                return Continent.Antarctica;
            case 'Asia':
                return Continent.Asia;
            case 'Europe':
                return Continent.Europe;
            case 'Oceania':
                return Continent.Oceania;
            case 'North_America':
                return Continent.NorthAmerica;
            case 'South_America':
                return Continent.SouthAmerica;
            default:
                return Continent.Africa;
        }

    }

}