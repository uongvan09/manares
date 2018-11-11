import { Component } from '@angular/core';
import { PopoverController } from 'ionic-angular';
import { PopoverPage } from '../popover/popover';
import { PopoverOrderTypePage } from '../popover-order-type/popover-order-type';
import { PopoverSearchPage } from './popover-search';

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

  constructor(public popoverCtrl:PopoverController) {
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

  presentPopoverSearchPage(myEvent) {
    let popover = this.popoverCtrl.create(PopoverSearchPage);
    popover.present({
      ev: myEvent
    });
  }


  

}
