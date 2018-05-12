import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';
import 'firebase/storage';
import { GalleryImage } from '../models/galleryImage.model';
import * as firebase from 'firebase';

@Injectable()
export class ImageService {
  private uid: string;

  constructor(private afAuth: AngularFireAuth, private db: AngularFireDatabase) {
    this.afAuth.authState.subscribe(auth => {
      if (auth !== undefined && auth !== null) {
        this.uid = auth.uid;
      }
    });
  }

  getImages(url: string): Observable<GalleryImage[]> {
    return this.db.list(url).valueChanges();
  }

  deleteImages() {
    var storage = firebase.storage();
    var storageRef = storage.ref();

    var desertRef = storageRef.child('images/citybeats-96.jpg');

    desertRef.delete();
  }

  cleanUp() {
    this.db.list('volkstanz').remove();
  }

  getImage(folder: string, key: string) {
    return firebase.database().ref(folder + "/" + key).once('value').then((snap) => snap.value());
  }
}
