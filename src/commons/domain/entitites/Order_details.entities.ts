import { Products } from "./product.entities copy"




export class Order_details {
    public order_detail_id: number
    public order_id?: number
    public product_id?: number
    public quantity?: number
    public products?: Products

}

