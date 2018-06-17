import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Appointment } from '../models/appointment.model';

@Injectable()
export class AppointmentService {
   itemsCollection: AngularFirestoreCollection<Appointment>;
  items: Observable<Appointment[]>;
  itemDoc: AngularFirestoreDocument<Appointment>;

  constructor(public afs: AngularFirestore) { 
    //this.items = this.afs.collection('items').valueChanges();
    this.itemsCollection = this.afs.collection('appointments', ref => ref.orderBy('date','asc'));

    this.items = this.itemsCollection.snapshotChanges().map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Appointment;
        data.id = a.payload.doc.id;
        return data;
      });
    });
  }

  getItems(){
    return this.items;
  }

  addItem(item: Appointment){
    this.itemsCollection.add(item);
  }

  deleteItem(item: Appointment){
    this.itemDoc = this.afs.doc(`appointments/${item.id}`);
    this.itemDoc.delete();
  }

  updateItem(item: Appointment){
    this.itemDoc = this.afs.doc(`appointments/${item.id}`);
    this.itemDoc.update(item);
  }
}
