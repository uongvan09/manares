import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsService } from '../../services/tabs.service';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { Product } from '../../model/order/product.model';
import { OrderListService } from '../../services/order-list.service';


/**
 * Generated class for the CreateOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-create-order',
  templateUrl: 'create-order.html', 
})
export class CreateOrderPage {
    productList: Observable<Product>; 
     numberProduct = 0;

  constructor(public navCtrl: NavController,
  public navParams: NavParams,
  private orderListService: OrderListService ) {
 
   
    this.productList = this.orderListService.getProductList()
    .snapshotChanges()
    .map(
    changes => {
   
    return changes.map(c => ({
    key: c.payload.key, ...c.payload.val()
    }))
    });
    
  }
  
  public increaseNumber(){
  this.numberProduct;
  
  }
  
  

  ionViewDidLoad() {
  
    console.log('ionViewDidLoad CreateOrderPage');
  }

}
