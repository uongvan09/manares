import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Order } from '../model/order/order.module';
import { Product } from '../model/order/product.module';


@Injectable()
export class OrderListService {
	
	private orderListRef = this.db.list<Order>('/order');
	private productListRef = this.db.list<Product>('/product')

	constructor (private db: AngularFireDatabase){}

	getOrderList(){
	return this.orderListRef;
	}
    
    getProductList(){
    return this.productListRef;
    
    }
}   
