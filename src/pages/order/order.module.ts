import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderPage } from './order';
import { PopoverSearchPage } from './popover-search';

@NgModule({
  declarations: [
    OrderPage,
    PopoverSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderPage),
    PopoverSearchPage,
    
  ],
})
export class OrderPageModule {}
