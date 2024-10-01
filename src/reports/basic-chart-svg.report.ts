import fs from "fs";
import { TDocumentDefinitions } from "pdfmake/interfaces";
import * as Utils from "src/utils/helpers/chart-utils";

let svgcontent = fs.readFileSync("src/assets/ford.svg", "utf8");



const generateChartImage = async () => {
    const chartsContFig = {
        type: 'bar',                                // Show a bar chart
        data: {
            labels: [2012, 2013, 2014, 2015, 2016],   // Set X-axis labels
            datasets: [{
                label: 'Users',                         // Create the 'Users' dataset
                data: [120, 60, 50, 180, 120],           // Add data to the chart
                backgroundColor: 'rgba(93,75,192,0.2)',
                borderColor: 'rgba(81,75,192)',
                borderWidth: 1,
            }]
        }
    }

    return Utils.chartJsToImage(chartsContFig);
}


const generteDonutChart = async () => {
    const DATA_COUNT = 5;
    const NUMBER_CFG = { count: DATA_COUNT, min: 0, max: 100 };

    const data = {
        labels: ['Red', 'Orange', 'Yellow', 'Green', 'Blue'],
        datasets: [
            {
                label: 'Dataset 1',
                data: Utils.numbers(NUMBER_CFG),
                backgroundColor: Object.values(Utils.CHART_COLORS),
            }
        ]
    };


    const config = {
        type: 'doughnut',
        data: data,
        options: {
            title: {
                display: true,
                text: 'Chart.js Doughnut Chart'
            },
            plugins: {
                legend: {
                    position: 'top',
                },

            }
        },

    };
    return Utils.chartJsToImage(config);
}





export const getBaiscChartSvg = async (): Promise<TDocumentDefinitions> => {



    const [chart, chartDonut] = await Promise.all([generateChartImage(), generteDonutChart()]);

    return {
        background: {
            image: "src/assets/reportGrap.png",
            width: 600
        },
        content: [
            {
                svg: svgcontent,

                width: 100,
                fit: [100, 100],// define la caja de la imagen
            }
            ,
            {
                image: chart,
                width: 400,
                margin: [0, 100, 0, 0],
                // fit: [100, 100],// define la caja de la imagen
            },
            {
                image: chartDonut,
                width: 400,
                // fit: [100, 100],// define la caja de la imagen
            },
        ]
    }
}