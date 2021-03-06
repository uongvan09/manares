import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { PopoverPage } from '../popover/popover';
import { PopoverOrderTypePage } from '../popover-order-type/popover-order-type';


import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
import { Order } from '../../model/order/order.model';
import { OrderListService } from '../../services/order-list.service'

/**

 * Generated class for the OrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */ 

@IonicPage()
@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {

  orderList: Observable<Order>

  constructor(public popoverCtrl:PopoverController, public navCtrl: NavController, private orderListService: OrderListService) {
    this.orderList = this.orderListService.getOrderList()
    .snapshotChanges()
    .map(
    changes => {
    return changes.map(c => ({
    key: c.payload.key, ...c.payload.val()
    }))
    })


  }

  presentPopoverOrder(myEvent) {
    let popover = this.popoverCtrl.create(PopoverPage);
    popover.present({
      ev: myEvent
    });
  }

  presentPopoverOrderType(myEvent) {
    let popover = this.popoverCtrl.create(PopoverOrderTypePage);
    popover.present({
      ev: myEvent
    });
  }

  
  


  

}
