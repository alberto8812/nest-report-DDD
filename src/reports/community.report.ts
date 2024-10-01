import { table } from "console";
import { TDocumentDefinitions } from "pdfmake/interfaces";

export const getCommunityReport = (): TDocumentDefinitions => {
    const docDefinition: TDocumentDefinitions = {
        content: [
            {
                columns: [
                    {
                        image: 'src/assets/tucan-code-logo.png',
                        width: 50,
                    }, {
                        text: 'forest admin community report \n RUT: 123456789 \n NIT: 123456789 \n Address: Calle 123',
                        style: 'header',
                        alignment: 'center'
                    },
                    {
                        alignment: 'right',
                        layout: 'borderBlues',
                        width: 50,
                        table: {
                            body: [
                                [
                                    [
                                        {
                                            layout: 'noBorders',
                                            table: {
                                                body: [
                                                    ['Date: 2021-08-25'],
                                                    ['Report: 123456789']
                                                ]
                                            }
                                        }
                                    ],

                                ]
                            ]
                        }
                    },
                ]

            },
            {
                margin: [0, 20],
                canvas: [
                    {
                        type: 'line',
                        x1: 0,
                        y1: 5,
                        x2: 515,
                        y2: 5,
                        lineWidth: 2,
                        lineColor: '#5f96d4'
                    }
                ]
            },

            //detalles del cliete
            {
                table: {
                    widths: ['auto', '*', 'auto', '*'],
                    body: [
                        [
                            {
                                text: 'datos del cliente',
                                fillColor: '#577e1',
                                color: 'white',
                                colSpan: 4,
                                border: [true, true, true, false],//borde de la celda
                            },
                            {},
                            {},
                            {}
                        ],
                        //razon social
                        [
                            {
                                text: 'Razon social',
                                fillColor: '#343a40',
                                color: 'white',
                                bold: true,
                            },

                            {
                                text: 'Nombre de la empresa',
                                fillColor: 'white',


                            },

                            {
                                text: 'Direccion',
                                fillColor: '#343a40',
                                color: 'white',

                            },

                            {
                                text: 'Callw falsa 123',
                                fillColor: 'white',


                            }
                        ],
                        [
                            {
                                text: 'RUT',
                                fillColor: '#343a40',
                                color: 'white',
                                bold: true,
                            },

                            {
                                text: '',
                                fillColor: 'white',


                            },

                            {
                                text: 'Telefono',
                                fillColor: '#343a40',
                                color: 'white',

                            },

                            {
                                text: '',
                                fillColor: 'white',


                            }
                        ],
                        [
                            {
                                text: 'Giro',
                                fillColor: '#343a40',
                                color: 'white',
                                bold: true,
                            },

                            {
                                text: '',
                                fillColor: 'white',


                            },

                            {
                                text: 'Condicion de pago',
                                fillColor: '#343a40',
                                color: 'white',

                            },

                            {
                                text: '',
                                fillColor: 'white',


                            }
                        ]
                    ]
                }
            }
        ]
    }

    return docDefinition;
}