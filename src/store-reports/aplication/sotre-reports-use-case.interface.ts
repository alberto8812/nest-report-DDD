


export interface IuseCaseStoreReportService {
    getOrderByReportByOrderId(orderId: string): Promise<any>;
}

export interface IResponse {
    message: string;
    code: number;
}