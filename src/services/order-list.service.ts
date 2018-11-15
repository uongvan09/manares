import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Order } from '../model/order/order.module';

@Injectable()
export class OrderListService {
	
	private orderListRef = this.db.list<Order>('/order');
	

	constructor (private db: AngularFireDatabase){}

	getOrderList(){
	return this.orderListRef;
	}
}   
