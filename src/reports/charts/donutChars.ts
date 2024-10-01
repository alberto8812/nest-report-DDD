import *  as Utils from 'src/utils/helpers/chart-utils'

interface DonutEntry {
    label: string;
    value: number;
}

interface DonutChart {
    entries: DonutEntry[];
}


export const getDonutChart = async (option: DonutChart): Promise<string> => {
    const data = {
        labels: option.entries.map((country) => country.label),
        datasets: [
            {
                label: 'Dataset 1',
                data: option.entries.map((country) => country.value),
                // backgroundColor: Object.values(Utils.CHART_COLORS),
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
     * 
     */

    return Utils.chartJsToImage(config)

}
