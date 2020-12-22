import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor(private angFireStore: AngularFirestore) { }

  getData() {
    return this.angFireStore.collection('Forums_db').snapshotChanges();
  }

  addTicket(resource) {
    return this.angFireStore.collection('Forums_db').add(resource);
  }

}
