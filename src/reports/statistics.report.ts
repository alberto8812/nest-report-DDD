import type { TDocumentDefinitions } from "pdfmake/interfaces"
import * as Utils from '../utils/helpers/chart-utils'




interface TopCountry {
    country: string;
    customers: number;
}

interface ReportOptions {
    title?: string;
    subtitle?: string;
    topCountries: TopCountry[];
}

const generateTopCountries = async (topCountries: TopCountry[]): Promise<string> => {

    const data = {
        labels: topCountries.map((country) => country.country),
        datasets: [
            {
                label: 'Dataset 1',
                data: topCountries.map((country) => country.customers),
                //backgroundColor: Object.values(Utils.CHART_COLORS),
            }
        ]
    }

    const config = {
        type: 'doughnut',
        data: data,
        options: {
            legend: {
                position: 'left',
            },
            plugins: {
                datalabels: {
                    color: 'white',
                    font: {
                        weight: 'bold',
                        size: 14
                    }
                    // text: 'Chart.js Doughnut Chart'
                }
            }
        },
    };
    /**
     * Compare this snippet from src/utils/helpers/chart-utils.ts:
     * gemeramos una imagen a partir de un objeto de datos de grafico
     */
    return Utils.chartJsToImage(config)

}



export const getStatisticsReport = async (option: ReportOptions): Promise<TDocumentDefinitions> => {
    const donutchart = await generateTopCountries(option.topCountries)
    const docDefinition: TDocumentDefinitions = {
        content: [
            {
                image: donutchart,
                width: 500
            }
        ]
    }

    return docDefinition
}