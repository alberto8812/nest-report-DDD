import type { TDocumentDefinitions } from "pdfmake/interfaces"
import * as Utils from '../utils/helpers/chart-utils'
import { getDonutChart } from "./charts/donutChars";
import { headerSection } from "./sections/header.section";
import { getLineChart } from "./charts/line.chart";
import { getBarChart } from "./charts";
import { footerSection } from "./sections/footer.section";




interface Entries {
    label: string;
    value: number;
}

interface ReportOptions {
    title?: string;
    subtitle?: string;
    entries: Entries[];
}


export const getStatisticsReport = async (option: ReportOptions): Promise<TDocumentDefinitions> => {
    const [donutchart, lineChart, barchart] = await Promise.all([getDonutChart({ entries: option.entries }), getLineChart(), getBarChart()])


    const docDefinition: TDocumentDefinitions = {
        pageMargins: [40, 100, 40, 60],
        header: headerSection({
            title: option.title ?? 'Reporte de estadísticas',
            subTitle: option.subtitle ?? 'Reporte generado por el sistema'
        }),
        footer: footerSection,
        content: [
            {
                columns: [
                    {
                        stack: [

                            {
                                text: `Mejores 10 países con más clientes`,
                                style: 'header',
                                bold: true,
                                alignment: 'center',
                                margin: [0, 0, 0, 20]
                            },
                            {
                                image: donutchart,
                                width: 300
                            },
                        ]
                    },
                    {
                        width: 'auto',
                        layout: 'lightHorizontalLines',
                        table: {
                            headerRows: 1,
                            widths: [100, 'auto'],
                            body: [

                                [{ text: 'Pais', bold: true }, { text: 'Cliente', bold: true }],
                                ...option.entries.map((entry) => [entry.label, entry.value])
                            ]
                        }
                    }

                ]
            },
            {
                image: lineChart,
                width: 500,
                margin: [0, 20]
            },
            {
                image: barchart,
                width: 500,
                margin: [0, 20]
            },
        ]
    }

    return docDefinition
}