import { Content, ContextPageSize, DynamicContent } from "pdfmake/interfaces";



export const footerSection = (currentPage: number, pageCount: number, pageSize: ContextPageSize): Content => {


    return {
        columns: [
            {
                text: `Page ${currentPage} of ${pageCount}`,
                alignment: "right",
                margin: [0, 20, 30, 0]
            }
        ]
    }
}