

export interface IcrudStoreReportRepository {
    getOrderByReportByOrderId(orderId: string): Promise<void>;
}