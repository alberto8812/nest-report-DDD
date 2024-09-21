import { Content, StyleDictionary, TDocumentDefinitions } from "pdfmake/interfaces"
import { CurrencyFormatter, DateFormater } from "src/utils"
import { footerSection } from "./sections/footer.section"
import { IOrder_detailsRepositoryDto } from "src/commons/domain/dto/Order_details-repository.dto"
import { IGetOrdersRepositoryDto } from "src/commons/domain/dto/Orders-repository.dto"

const logo: Content = {
    image: 'src/assets/tucan-banner.png',
    width: 100,
    height: 30,
    margin: [20, 90, 10, 30],
    alignment: 'right'
}
const styles: StyleDictionary = {
    header: {
        fontSize: 20,
        bold: true,
        margin: [0, 120, 0, 0]
    }
}


export const orderByIDReport = (order: IGetOrdersRepositoryDto): TDocumentDefinitions => {
    console.log(order)
    let Subtotal: number = 0;
    const { order_details, customers, ...rest } = order;
    return {
        styles: styles,
        header: logo,
        pageMargins: [40, 60, 40, 60],
        background: {
            image: 'src/assets/backgroundImages.png',
            width: 600
        },
        footer: footerSection,
        content: [
            {
                text: 'Tocan Code',
                style: 'header'
            },
            {
                columns: [
                    {
                        text: '15 Montgomery Str, Suite 100,\n Ottawa ON K2Y 9X1, CANADA \n BN: 12783671823 \n Email:admin@gmail.com \n Tel: 123 456 7890',
                    },
                    {
                        text: [
                            { text: `Recibo #: ${rest.order_id} `, bold: true },
                            ` \n Fecha del recibo: ${DateFormater.getDDMMMYYY(new Date())} \n Pagar antes de: ${DateFormater.getDDMMMYYY(new Date())}\n `
                        ],
                        alignment: 'right',
                    }
                ]
            },
            //QR code
            {
                qr: 'https://www.linkedin.com/in/carlos-alberto-velasco-saavedra-959676190',
                fit: 90, // Adjusted fit size for QR code
                foreground: '#6c7059',
                background: '#ffffff',
                alignment: 'right',
                margin: [0, 10]
            },
            //dirrecion del clinete
            {
                margin: [0, 5],
                text: [
                    {
                        text: 'Cobrar a : \n\n',
                        bold: true
                    },
                    {
                        text: `${customers.customer_name} \n`,

                    },
                    {
                        text: 'Dirección:',
                        bold: true
                    },
                    {
                        text: ` ${customers.address}\n`,
                        bold: true
                    },
                    {
                        text: 'Teléfono: ',
                        bold: true
                    },
                    {
                        text: `${customers.contact_name}\n`,
                        bold: true
                    },
                    {
                        text: 'Email: ',
                        bold: true
                    },
                    { text: `${customers.contact_name.slice(0, 3)}@gmail.com` }
                ]
            },
            //table del detalle de la orden
            {
                layout: 'headerLineOnly',
                margin: [0, 20],
                table: {
                    headerRows: 1,
                    widths: [50, '*', 'auto', 'auto', 'auto'],
                    body: [
                        ['ID', 'Descripción', 'Cantidad', 'Precio', 'Total'],

                        ...order_details.map((detail) => {
                            Subtotal += +detail.products.price * detail.quantity;
                            return [

                                detail.product_id.toString(),
                                detail.products.product_name,
                                detail.quantity.toString(),
                                CurrencyFormatter.formatCurrency(detail.products.price),
                                {
                                    text: CurrencyFormatter.formatCurrency(+detail.products.price * detail.quantity),
                                    alignment: 'right'
                                }
                            ]
                        }
                        )

                    ]
                }
            },
            //salto de linea
            '\n',
            //Ttotal de la orden
            {
                columns: [
                    {
                        width: '*',
                        text: ' ',
                    }, {
                        width: 'auto',
                        layout: 'noBorders',
                        table: {
                            headerRows: 1,
                            widths: ['*', 'auto'],
                            body: [
                                ['Subtotal', { text: CurrencyFormatter.formatCurrency(Subtotal), alignment: 'right' }],
                                ['IVA', { text: CurrencyFormatter.formatCurrency(Subtotal * 0.19), alignment: 'right' }],
                                [{ text: 'Total', bold: true }, { text: CurrencyFormatter.formatCurrency(Subtotal + (Subtotal * 0.19)), alignment: 'right' }]
                            ]
                        }
                    }
                ]
            }

        ]
    }
}