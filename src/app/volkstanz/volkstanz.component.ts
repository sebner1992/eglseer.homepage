import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service';
import { GalleryImage } from '../models/galleryImage.model';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';

@Component({
  selector: 'app-volkstanz',
  templateUrl: './volkstanz.component.html',
  styleUrls: ['./volkstanz.component.css']
})
export class VolkstanzComponent implements OnInit {
  images: Observable<GalleryImage[]>;

  constructor(private imageService: ImageService) { }

  ngOnInit() {
  }

}