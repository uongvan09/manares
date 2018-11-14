import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
/***/
  constructor(public navCtrl: NavController, public afd : AngularFireDatabase) {
  	this.getDataFromFireBase()
  }

  getDataFromFireBase(){
  /**interface IFirebaseHeros {
    name ?: string;
    email : string;

   
}*/
  /**.list() return FirebaseListObservable
  in angular 5.0 use .valueChanges().subscribe
  .valueChanges() return an Observable without any metadata*/

  this.afd.list('/').valueChanges().subscribe(
  	data => {
  		console.log(data);
  		

  	});  


  /**this.afd.list<IFirebaseHeros>('/').valueChanges().subscribe(
  	(data:IFirebaseHeros[]) => {
  		console.log(data);
  		data.forEach((item) => {
  		console.log(item.mail);
  		});

  	});*/
  	}
  	}

 
