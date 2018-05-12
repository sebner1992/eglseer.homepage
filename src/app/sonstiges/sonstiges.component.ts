import { Component, OnInit } from '@angular/core';
import { ImageService } from '../services/image.service';

@Component({
  selector: 'app-sonstiges',
  templateUrl: './sonstiges.component.html',
  styleUrls: ['./sonstiges.component.css']
})
export class SonstigesComponent implements OnInit {

  constructor(private imageService: ImageService) { }

  ngOnInit() {

  }

}
