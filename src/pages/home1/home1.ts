import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SodoPage } from '../sodo/sodo';
import { OrderPage } from '../order/order';

/**
 * Generated class for the Home1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home1',
  templateUrl: 'home1.html',
})
export class Home1Page {
	sodo: any;
	order: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  this.sodo = SodoPage;
  this.order= OrderPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Home1Page');
  }
 
}
