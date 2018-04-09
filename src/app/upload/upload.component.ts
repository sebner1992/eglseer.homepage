import { Component } from '@angular/core';
import { UploadService } from '../services/upload.service';
import { Upload } from '../models/upload.model';
import { Globals } from '../globals/globals';
import * as _ from 'lodash';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  images: FileList;
  members: FileList;
  upload: Upload;
  event: string;
  is2008: boolean = false;
  is2009: boolean = false;
  is2010: boolean = false;
  is2011: boolean = false;
  is2012: boolean = false;
  is2013: boolean = false;
  is2014: boolean = false;
  is2015: boolean = false;
  is2016: boolean = false;
  is2017: boolean = false;
  is2018: boolean = true;

  selectedYear: string = "2018";
  selectedEvent: string;
  imageUrl: string;
  isUrlValid: boolean = false;

  constructor(private uploadService: UploadService, public globals: Globals) {
  }

  handleImages(event) {
    this.images = event.target.files;
  }

  handleMembers(event) {
    this.members = event.target.files;
  }

  uploadImages() {
    const filesToUpload = this.images;
    const filesIdx = _.range(filesToUpload.length);
    this.buildUrl(this.selectedYear, this.selectedEvent);
    console.log(this.imageUrl);
    if (this.isUrlValid) {
      _.each(filesIdx, (idx) => {
        this.upload = new Upload(filesToUpload[idx]);
        this.uploadService.uploadImage(this.upload, this.imageUrl);
      });
    }
  }

  buildUrl(prefix: string, suffix: string) {
    if (prefix && suffix) {
      this.isUrlValid = true;
      this.imageUrl = prefix + "/" + suffix + "/";
    }
  }


  changeEvent(event: string) {
    this.selectedEvent = event;
  }

  enable2008() {
    this.disableAll();
    this.is2008 = true;
    this.selectedYear = "2008";
  }

  enable2009() {
    this.disableAll();
    this.is2009 = true;
    this.selectedYear = "2009";
  }

  enable2010() {
    this.disableAll();
    this.is2010 = true;
    this.selectedYear = "2010";
  }

  enable2011() {
    this.disableAll();
    this.is2011 = true;
    this.selectedYear = "2011";
  }

  enable2012() {
    this.disableAll();
    this.is2012 = true;
    this.selectedYear = "2012";
  }

  enable2013() {
    this.disableAll();
    this.is2013 = true;
    this.selectedYear = "2013";
  }

  enable2014() {
    this.disableAll();
    this.is2014 = true;
    this.selectedYear = "2014";
  }

  enable2015() {
    this.disableAll();
    this.is2015 = true;
    this.selectedYear = "2015";
  }

  enable2016() {
    this.disableAll();
    this.is2016 = true;
    this.selectedYear = "2016";
  }

  enable2017() {
    this.disableAll();
    this.is2017 = true;
    this.selectedYear = "2017";
  }

  enable2018() {
    this.disableAll();
    this.is2018 = true;
    this.selectedYear = "2018";
  }

  disableAll() {
    this.is2008 = false;
    this.is2009 = false;
    this.is2010 = false;
    this.is2011 = false;
    this.is2012 = false;
    this.is2013 = false;
    this.is2014 = false;
    this.is2015 = false;
    this.is2016 = false;
    this.is2017 = false;
    this.is2018 = false;
  }


}
