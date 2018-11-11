import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { SodoPage } from '../pages/sodo/sodo';
import { OrderPage } from '../pages/order/order';
import { PopoverPage } from '../pages/popover/popover';
import { PopoverOrderTypePage } from '../pages/popover-order-type/popover-order-type';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SodoPage,
    OrderPage,
    PopoverPage,
    PopoverOrderTypePage,

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SodoPage,
    OrderPage,
    PopoverPage,
    PopoverOrderTypePage,

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
