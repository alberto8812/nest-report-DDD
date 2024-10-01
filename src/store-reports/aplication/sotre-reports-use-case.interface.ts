


export interface IuseCaseStoreReportService {
    getOrderByReportByOrderId(orderId: string): Promise<any>;
    getSvgChart(): Promise<any>;
    getStatistics(): Promise<any>;
}

export interface IResponse {
    message: string;
    code: number;
}