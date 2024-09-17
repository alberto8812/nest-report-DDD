import { TDocumentDefinitions } from "pdfmake/interfaces";
import { headerSection } from "./sections/header.section";

export const getCountriesReport = (): TDocumentDefinitions => {

    return {
        pageOrientation: 'landscape', //horientacion del documento
        header: headerSection({ title: 'Countries report Report', subTitle: 'List of Countries' }),
        pageMargins: [40, 100, 40, 60],
        content: [
            {
                layout: 'lightHorizontalLines', // optional
                table: {
                    // headers are automatically repeated if the table spans over multiple pages
                    // you can declare how many rows should be treated as headers
                    headerRows: 1,
                    widths: ['*', 'auto', 100, '*'],

                    body: [
                        ['First', 'Second', 'Third', 'The last one'],
                        ['Value 1', 'Value 2', 'Value 3', 'Value 4'],
                        [{ text: 'Bold value', bold: true }, 'Val 2', 'Val 3', 'Val 4']
                    ]
                }
            }
        ]
    }
}