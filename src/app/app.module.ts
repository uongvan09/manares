import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule} from 'angularfire2';
import { AngularFireDatabaseModule} from "angularfire2/database"


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Home1Page } from '../pages/home1/home1';
import { LoginPage } from '../pages/login/login';
import { SodoPage } from '../pages/sodo/sodo';
import { OrderPage } from '../pages/order/order';
import { PopoverPage } from '../pages/popover/popover';
import { PopoverOrderTypePage } from '../pages/popover-order-type/popover-order-type';
import { NoteListService } from '../services/note-list.service';
import { OrderListService } from '../services/order-list.service';

var config = {
    apiKey: "AIzaSyCWtIFVEGd3ScuRKRO8AXYtGEX96CpoUmY",
    authDomain: "manares0901.firebaseapp.com",
    databaseURL: "https://manares0901.firebaseio.com",
    projectId: "manares0901",
    storageBucket: "manares0901.appspot.com",
    messagingSenderId: "482481319763"
  };


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    HomePage,
    Home1Page,
    SodoPage,
    OrderPage,
    PopoverPage,
    PopoverOrderTypePage,

  ],
  imports: [
    BrowserModule,
    AngularFireDatabaseModule,
    AngularFireModule,
    AngularFireModule.initializeApp(config),
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    HomePage,
    Home1Page,
    SodoPage,
    OrderPage,
    PopoverPage,
    PopoverOrderTypePage,
    


  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    NoteListService,
    OrderListService
  ]
})
export class AppModule {}
