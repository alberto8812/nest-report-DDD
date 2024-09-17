



export class Country {
    public id: bigint;
    public name: string;
    public iso2: string;
    public iso3: string;
    public local_name: string;
    public continent: Continent;
}
export enum Continent {
    Africa = "Africa",
    Antarctica = "Antarctica",
    Asia = "Asia",
    Europe = "Europe",
    Oceania = "Oceania",
    NorthAmerica = "North America",  // `@map("North America")` es representado así en TypeScript
    SouthAmerica = "South America"
}
