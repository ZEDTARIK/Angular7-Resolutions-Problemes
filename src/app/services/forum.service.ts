import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Forum } from 'src/app/models/forum';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor(private angFireStore: AngularFirestore) { }

  getData() {
    return this.angFireStore.collection('Forums_db').snapshotChanges();
  }

  addTicket(resource: Forum) {
    return this.angFireStore.collection('Forums_db').add(resource);
  }

}
