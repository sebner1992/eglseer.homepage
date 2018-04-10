import { Component, OnInit, OnChanges } from '@angular/core';
import { ImageService } from '../services/image.service';
import { GalleryImage } from '../models/galleryImage.model';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  images: Observable<GalleryImage[]>;
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

  constructor(private imageService: ImageService) { }

  selectedYear: string = "2018";
  selectedEvent: string;
  imageUrl: string;
  isUrlValid: boolean = false;
  caruselTitle: string = "Such dir ein Jahr und eine Veranstaltung aus!";

  buildUrl(prefix: string, suffix: string) {
    if (prefix && suffix) {
      this.isUrlValid = true;
      this.imageUrl = prefix + "/" + suffix + "/";
    }
  }

  changeEvent(event: string) {
    this.selectedEvent = event;
    this.buildUrl(this.selectedYear, this.selectedEvent);
    this.caruselTitle = "";
    this.setTitle(this.selectedEvent);
    this.images = this.imageService.getImages(this.imageUrl);
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
    this.caruselTitle = "Such dir eine Veranstaltung aus!";
  }

  cleanUp() {
    this.imageService.cleanUp();
  }

  setTitle(event: string) {
    switch (event) {
      case "weihnachtsfeier": this.caruselTitle = "Weihnachtsfeier " + this.selectedYear;
        break;
      case "jhv": this.caruselTitle = "Jahreshauptversammlung " + this.selectedYear;
        break;
      case "maibaum": this.caruselTitle = "Maibaumsetzen " + this.selectedYear;
        break;
      case "festdervolkskulturen": this.caruselTitle = "Fest der Volkskulturen  " + this.selectedYear;
        break;
      case "brauchtumstag": this.caruselTitle = "Brauchtumstag  " + this.selectedYear;
        break;
      case "kathreintanz": this.caruselTitle = "Eglseer Kathreintanz  " + this.selectedYear;
        break;
      case "alpenlaender": this.caruselTitle = "Alpenländischer Advent  " + this.selectedYear;
        break;
      case "ausflug": this.caruselTitle = "Eglseer Ausflug  " + this.selectedYear;
        break;
      case "tanzindenmai": this.caruselTitle = "Tanz in den Mai  " + this.selectedYear;
        break;
      case "jugendtanzt": this.caruselTitle = "Jugend|tanzt  " + this.selectedYear;
        break;
      case "fruehschoppen": this.caruselTitle = "Fühschoppen zum 40-jährigen Jubiläum  " + this.selectedYear;
        break;
      case "sonnwendfeuer": this.caruselTitle = "Sonnwendfeuer brennen Rammingstein  " + this.selectedYear;
        break;
      case "ferienkalender": this.caruselTitle = "Ferienkalender 'Eglseer Rundumadum'  " + this.selectedYear;
        break;
      case "volkstaenzertag": this.caruselTitle = "Volkstänzertag Thalgau " + this.selectedYear;
        break;
      case "daenenabend": this.caruselTitle = "Dänenabend " + this.selectedYear;
        break;
      case "gebroland": this.caruselTitle = "Geburtstag Roland Kerschbaum " + this.selectedYear;
        break;
      case "gebgitti": this.caruselTitle = "Geburtstag Gitti Jischa " + this.selectedYear;
        break;
      case "erntedank": this.caruselTitle = "Erntedank " + this.selectedYear;
        break;
      case "fasching": this.caruselTitle = "Fasching " + this.selectedYear;
        break;
      case "feuerwehrfest": this.caruselTitle = "Feuerwehrfest " + this.selectedYear;
        break;
      case "grillen": this.caruselTitle = "Eglseer Grillen " + this.selectedYear;
        break;
      case "hoagascht": this.caruselTitle = "Hoagascht " + this.selectedYear;
        break;
      case "hochzeit": this.caruselTitle = "Eglseer Hochzeit " + this.selectedYear;
        break;
      case "flachgheim": this.caruselTitle = "Jahrestag der Flachgauer Heimatvereine " + this.selectedYear;
        break;
      case "orfgutenmorgen": this.caruselTitle = "ORF Guten Morgen " + this.selectedYear;
        break;
      case "erntedankaigen": this.caruselTitle = "Erntedank Aigen " + this.selectedYear;
        break;
      case "erntedankelsb": this.caruselTitle = "Erntedank Elsbethen " + this.selectedYear;
        break;
      case "stockturnierelsb": this.caruselTitle = "Stockturnier Elsbethen " + this.selectedYear;
        break;
      case "stockturnierstrawa": this.caruselTitle = "Stockturnier Straßwalchen " + this.selectedYear;
        break;
      case "tanzkurs": this.caruselTitle = "Tanzkurs " + this.selectedYear;
        break;
      case "festtage": this.caruselTitle = "Eglseer Festtage " + this.selectedYear;
        break;
        case "gebbgm": this.caruselTitle = "Geburtstag Bgm. Franz Tiefenbacher " + this.selectedYear;
        break;
        case "kindertanz": this.caruselTitle = "Kindertanzen " + this.selectedYear;
        break;
        case "tanzumdenbrunnen": this.caruselTitle = "Tanz um den Brunnen " + this.selectedYear;
        break;
        case "voixtonz": this.caruselTitle = "VoixTonzTog " + this.selectedYear;
        break;
    }
  }
}