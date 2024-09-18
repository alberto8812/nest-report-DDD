import { TDocumentDefinitions } from "pdfmake/interfaces";
import { headerSection } from "./sections/header.section";
import { title } from "process";
import { Country } from "src/commons/domain/entitites";
import { footerSection } from "./sections/footer.section";



interface ReportOptions {
    title?: string,
    subtitle?: string,
    countries: Country[]
}
export const getCountriesReport = (options: ReportOptions): TDocumentDefinitions => {
    const { title, subtitle, countries } = options;
    return {
        pageOrientation: 'landscape', //horientacion del documento
        header: headerSection({ title: title ? title : 'Countries report Report', subTitle: subtitle ? subtitle : 'List of Countries' }),
        footer: footerSection,
        pageMargins: [40, 100, 40, 60],
        content: [
            {
                layout: 'customLayou01', // optional
                table: {
                    // headers are automatically repeated if the table spans over multiple pages
                    // you can declare how many rows should be treated as headers
                    headerRows: 1,
                    widths: [50, 50, 50, '*', '*', '*'],

                    body: [
                        ['ID', 'ISO2', 'ISO3', 'Name', 'Contitent', 'Local Name'],
                        ...countries.map(country => [
                            country.id.toString(),
                            country.iso2,
                            country.iso3,
                            {
                                text: country.name,
                                bold: true
                            },
                            country.continent,
                            country.local_name
                        ]),
                    ]
                }
            },
            //tabla de totales
            {
                text: 'Totales',
                style: {
                    fontSize: 16,
                    bold: true,
                    margin: [0, 40, 0, 0]
                }
            },
            {
                layout: 'noBorders',
                table: {
                    headerRows: 1,
                    widths: [50, 50, 50, '*', 'auto', '*'],
                    body: [
                        [
                            {
                                text: `total de paises`,
                                colSpan: 3, //la columna toma tres posiciones
                                bold: true
                            },
                            {},
                            {},
                            {
                                text: countries.length.toString(),
                                bold: true
                            }
                            ,
                            {},
                            {},

                        ]
                    ]

                }
            }
        ]
    }
}