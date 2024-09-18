import type { TDocumentDefinitions } from "pdfmake/interfaces"

export const gethelloWorldReport = (): TDocumentDefinitions => {
    const docDefinition: TDocumentDefinitions = {
        content: ['hola mundo']
    }

    return docDefinition
}