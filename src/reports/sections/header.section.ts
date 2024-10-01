import type { Content } from "pdfmake/interfaces"
import { DateFormater } from "src/utils";



const logo: Content = {
    image: 'src/assets/tucan-code-logo.png',
    width: 100,
    height: 100,
    alignment: 'center',
    margin: [0, 0, 0, 20],
}
const createDate: Content = {
    text: DateFormater.getDDMMMYYY(new Date()),
    alignment: 'right',
    margin: [20, 20],
    width: 100,
    fontSize: 7
}
interface HeaderOption {
    title?: string;
    subTitle?: string;
    showLogo?: boolean;
    showData?: boolean;
}
export const headerSection = (options: HeaderOption): Content => {

    const {
        title,
        subTitle,
        showLogo = true,
        showData = true
    } = options;

    const headerLogo: Content = showLogo ? logo : null;
    const headerDate: Content = showData ? createDate : null;
    const headerSubtitle: Content = subTitle ? {
        text: subTitle,
        style: {
            bold: true,
            alignment: "center",
            fontSize: 15
        },
    } : null;


    const headerTitle: Content = title ?
        {
            stack: [
                {
                    text: title,
                    style: {
                        bold: true,
                        alignment: "center",
                        fontSize: 22
                    },
                },
                headerSubtitle
            ],
            fontSize: 15,
            alignment: 'center',
            margin: [0, 20, 0, 0],
            // text: title,
            // style: {
            //     bold: true,
            //     alignment: "center"
            // }
        } : null;

    return {
        //para agregar mas contenido en el 
        //header agregamos columnas para hacer la distribucion
        columns: [
            headerLogo,
            headerTitle,
            headerDate

        ]
    }


}