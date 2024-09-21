import { Customers } from "./customers.entities"
import { Order_details } from "./Order_details.entities"




export class Orders {
    public order_id: number
    public customer_id?: number
    order_details: Order_details[]
    customers: Customers

}

