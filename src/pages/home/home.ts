import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Observable';
import { Note } from '../../model/note/note.model';
import { NoteListService } from '../../services/note-list.service';
 
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  noteList: Observable<Note[]>
 
  constructor(public navCtrl: NavController, private noteListService: NoteListService) {
  console.log("kfkd");
    this.noteList = this.noteListService.getNoteList()
    .snapshotChanges()
    .map(
    changes => {
    console.log(changes);
    return changes.map(c => ({
    key: c.payload.key, ...c.payload.val()
    }))
    })

      
  }
}