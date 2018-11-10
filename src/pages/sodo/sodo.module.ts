import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SodoPage } from './sodo';

@NgModule({
  declarations: [
    SodoPage,
  ],
  imports: [
    IonicPageModule.forChild(SodoPage),
  ],
})
export class SodoPageModule {}
