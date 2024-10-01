import { Injectable, NotFoundException } from "@nestjs/common";
import { IOrmOrderRepository } from "./orm-country.interface";
import { PrismaService } from "src/commons/infrastructure/config-database";
import { IGetOrdersRepositoryDto } from "../../dto/Orders-repository.dto";
import { IGetCustomersRepositoryDto } from "../../dto/Customers-repository.dto";
import { IGetOrder_detailsRepositoryDto } from "../../dto/Order_details-repository.dto";
import { json } from "stream/consumers";
import { IGetCountryRepositoryDto } from "../../dto/country-repository.dto";
import { count } from "console";
//import { IGetProductsRepositoryDto } from "../../dto/Products-repository.dto";

export interface IGetProductsRepositoryDto {

    product_id: number;

    product_name: string;

    category_id: number;

    unit: string;

    price: number;

}


@Injectable()
export class OrmOrderRepository implements IOrmOrderRepository {

    constructor(private readonly prisma: PrismaService) { }

    async getStatistics(): Promise<CountryCustomerStats[]> {
        const countryCustomers = await this.prisma.customers.groupBy({
            by: ['country'],
            _count: true,
            orderBy: {
                _count: {
                    country: 'desc'
                }
            },
            take: 10
        })
        return countryCustomers


    }
    getAllOrders(): Promise<IGetOrdersRepositoryDto[]> {
        throw new Error("Method not implemented.");
    }
    async getOrdersById(orderId: number): Promise<IGetOrdersRepositoryDto> {

        const order = await this.prisma.orders.findUnique({
            where: {
                order_id: orderId
            },
            include: {
                order_details: {
                    include: {
                        products: true
                    }
                },
                customers: true,
            }
        })
        if (!order) throw new NotFoundException("Order not found");
        // throw new Error("Method not implemented.");
        return {
            order_id: order.order_id,
            customer_id: order.customer_id,
            order_details: order.order_details.map(order_detail => {
                return {
                    order_detail_id: order_detail.order_detail_id,
                    order_id: order_detail.order_id,
                    product_id: order_detail.product_id,
                    quantity: order_detail.quantity,
                    products: {
                        product_id: order_detail.products.product_id,
                        product_name: order_detail.products.product_name,
                        category_id: order_detail.products.category_id,
                        unit: order_detail.products.unit,
                        price: Number(order_detail.products.price)
                    }

                }
            }
            ),
            customers: {
                customer_id: order.customers.customer_id,
                customer_name: order.customers.customer_name,
                contact_name: order.customers.contact_name,
                address: order.customers.address,
                city: order.customers.city,
                postal_code: order.customers.postal_code,
                country: order.customers.country
            }
        }
    }
    // async getAllContinentsCiuntries(continents: string): Promise<IGetCountryRepositoryDto[]> {
    //     const countries = await this.prisma.countries.findMany(
    //         {
    //             where: {
    //                 local_name: {
    //                     not: null
    //                 },
    //                 continent: {
    //                     equals: continents as continents,  // Usa el filtro "equals" si es un enum
    //                 },
    //             }
    //         }
    //     )
    //     return countries.map(country => {

    //         return {
    //             ...country,
    //             continent: this.MapContienet(country.continent)
    //         }
    //     })
    // }


}