import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SodoPage } from '../sodo/sodo';
import { OrderPage } from '../order/order';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	sodo: any;
  	order: any;

  constructor(public navCtrl: NavController) {
    this.sodo  = SodoPage;
    this.order = OrderPage;
  }

}
