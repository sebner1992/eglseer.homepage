import { Injectable } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { GalleryImage } from '../models/galleryImage.model';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database-deprecated';
import { Upload } from '../models/upload.model';
import { Globals } from '../globals/globals';
import * as  firebase from 'firebase';

@Injectable()
export class UploadService {
  private galleryPath = '/gallery';
  private memberPath = '/members';
  private uploads: FirebaseListObservable<GalleryImage[]>;
  private filenames: Array<string> = new Array();

  constructor(private ngFire: AngularFireModule, private db: AngularFireDatabase, private globals: Globals) { }

  uploadImage(upload: Upload, comp: String) {
    const storageRef = firebase.storage().ref();
    const uploadTask = storageRef.child(`${comp}/${upload.file.name}`)
      .put(upload.file);

    uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
      // three observers
      // 1.) state_changed observer
      (snapshot) => {
        // upload in progress
        upload.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
      },
      // 2.) error observer
      (error) => {
        // upload failed
        console.log(error);
      },
      // 3.) success observer
      (): any => {
        upload.url = uploadTask.snapshot.downloadURL;
        upload.name = upload.file.name;
        if (this.saveFileData(upload, comp)) {
          this.globals.setImageInfoText("Image uploaded!");
        }
        else {
          this.globals.setImageInfoText("Image upload failed!");
        }
      }
    );
  }

  private saveFileData(upload: Upload, comp: String) {
    this.db.list(`${comp}/`).push(upload);
    return true;
  }
}