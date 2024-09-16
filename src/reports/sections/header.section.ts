import type { Content } from "pdfmake/interfaces"
import { DateFormater } from "src/utils";



const logo: Content = {
    image: 'src/assets/tucan-code-logo.png',
    width: 100,
    height: 100,
    alignment: 'center',
    margin: [0, 0, 0, 20],
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
    const headerDate: Content = showData ? {
        text: DateFormater.getDDMMMYYY(new Date()),
        alignment: 'right',
        margin: [20, 20]
    } : null;


    const headerTitle: Content = title ?
        {
            text: title,
            style: {
                bold: true,
                alignment: "center"
            }
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