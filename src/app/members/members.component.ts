import { Component, OnInit, OnChanges } from '@angular/core';
import { ImageService } from '../services/image.service';
import { GalleryImage } from '../models/galleryImage.model';
import { Member } from '../models/member.model';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit, OnChanges {
  eglseer: Array<any> = [];
  ehrenmitglieder: Array<any> = [];
  taenzer: Array<any> = [];
  tanzlmusi: Array<any> = [];
  ausbildung: Array<any> = [];
  tanzkreis: Array<any> = [];

  constructor(private imageService: ImageService) {
    this.taenzer = [
      { name: 'Brunnauer Cornelia', imgUrl: 'assets/mitglieder/taenzer/conny.jpg', function: 'Tänzerin, Kassier-Stv.', activeSince: '2015', instrument: '' },
      { name: 'Ebner Sebastian', imgUrl: 'assets/mitglieder/taenzer/basti.jpg', function: 'Tänzer, Kassier', activeSince: '2009', instrument: 'Tuba' },
      { name: 'Fürstaller Hannes', imgUrl: 'assets/mitglieder/taenzer/hannes_f.jpg', function: 'Obmann, Tänzer, DJET', activeSince: '2004', instrument: 'Steir. Harmonika, Posaune' },
      { name: 'Haider Dominic', imgUrl: 'assets/mitglieder/taenzer/dominic.jpg', function: 'Tänzer', activeSince: '2009', instrument: '' },
      { name: 'Haider Sabine', imgUrl: 'assets/mitglieder/taenzer/sabine.jpg', function: 'Vortänzerin, Tänzerin', activeSince: '2006', instrument: '' },
      { name: 'Katharina Krabath', imgUrl: 'assets/mitglieder/taenzer/kathi_k.jpg', function: 'Tänzerin', activeSince: '2015', instrument: '' },
      { name: 'Lindner Martin', imgUrl: 'assets/mitglieder/taenzer/martin.jpg', function: 'Vortänzer, Tänzer', activeSince: '2012', instrument: '' },
      { name: 'Lindner Thomas', imgUrl: 'assets/mitglieder/taenzer/thomas.jpg', function: 'Tänzer', activeSince: '2014', instrument: '' },
      { name: 'Pesendorfer Nicole', imgUrl: 'assets/mitglieder/taenzer/nici.jpg', function: 'Tänzerin', activeSince: '2014', instrument: '' },
      { name: 'Schmidlechner David', imgUrl: 'assets/mitglieder/taenzer/david.jpg', function: 'Tänzer', activeSince: '2006', instrument: '' },
      { name: 'Zenker Anna', imgUrl: 'assets/mitglieder/taenzer/anna_z.jpg', function: 'Tänzerin, DJET', activeSince: '2007', instrument: 'Zither, Klarinette' },
      { name: 'Zenker Eva', imgUrl: 'assets/mitglieder/taenzer/eva_z.jpg', function: 'Tänzerin', activeSince: '2008', instrument: 'Hackbrett, Klarinette' },
      { name: 'Haider Benjamin', imgUrl: 'assets/mitglieder/taenzer/benji.jpg', function: 'Tänzer', activeSince: '2011', instrument: '' },
      { name: 'Zapf Katharina', imgUrl: 'assets/mitglieder/taenzer/katie.jpg', function: 'Tänzerin', activeSince: '2015', instrument: '' },
      { name: 'Willinger Julia', imgUrl: 'assets/mitglieder/taenzer/julie.jpg', function: 'Tänzerin', activeSince: '2016', instrument: '' },
      { name: 'Krabath Bettina', imgUrl: 'assets/mitglieder/taenzer/betti.jpg', function: 'Tänzerin', activeSince: '2016', instrument: '' },
      { name: 'Hirnsperger Johannes', imgUrl: 'assets/mitglieder/taenzer/speck.jpg', function: 'Tänzer', activeSince: '2017', instrument: '' },
      { name: 'Fagerer Simon', imgUrl: 'assets/mitglieder/taenzer/brot.jpg', function: 'Tänzer', activeSince: '2017', instrument: '' },
      { name: 'Prähauser Katrin', imgUrl: 'assets/mitglieder/taenzer/katrin.jpg', function: 'Tänzerin', activeSince: '2017', instrument: '' },
      { name: 'Herbst Sabrina', imgUrl: 'assets/mitglieder/taenzer/sabrina.jpg', function: 'Tänzerin', activeSince: '2017', instrument: '' },
      { name: 'Steindl Lisa', imgUrl: 'assets/mitglieder/taenzer/lisa_s.jpg', function: 'Tänzerin', activeSince: '2017', instrument: '' },
      { name: 'Schmidlechner Sarah', imgUrl: 'assets/mitglieder/taenzer/sarah.jpg', function: 'Tänzerin', activeSince: '2017', instrument: '' },
      { name: 'Fagerer Andreas', imgUrl: 'assets/mitglieder/taenzer/andi_f.jpg', function: 'Tänzer', activeSince: '2017', instrument: '' },
      { name: 'Radauer Lena', imgUrl: 'assets/mitglieder/taenzer/lena_r.jpg', function: 'Tänzerin', activeSince: '2017', instrument: '' },
    ];
    this.ausbildung = [
      { name: 'Winhart Jacqueline', imgUrl: 'assets/mitglieder/ausbildung/jacqui.jpg', function: 'Tänzerin', activeSince: '2018', instrument: '' },
      { name: 'Herbst Thomas', imgUrl: 'assets/mitglieder/ausbildung/thomas_h.jpg', function: 'Tänzer', activeSince: '2018', instrument: '' },
      { name: 'Herbst Christina', imgUrl: 'assets/mitglieder/placeholder.jpg', function: 'Tänzerin', activeSince: '2017', instrument: '' },
    ];
    this.tanzkreis = [
      { name: 'Herbst Monika', imgUrl: 'assets/mitglieder/taenzer/monika.jpg', function: 'Tänzerin', activeSince: '1976', instrument: '' },
      { name: 'Herbst Josef', imgUrl: 'assets/mitglieder/taenzer/sepp_h.jpg', function: 'Beirat, Tänzer ', activeSince: '1974', instrument: '' },
      { name: 'Baal Anneliese', imgUrl: 'assets/mitglieder/taenzer/anneliese.jpg', function: 'Tänzerin', activeSince: '1977', instrument: '' },
      { name: 'Baal Sepp', imgUrl: 'assets/mitglieder/taenzer/sepp_b.jpg', function: 'Tänzer', activeSince: '1981', instrument: '' },
      { name: 'Prähauser Andre', imgUrl: 'assets/mitglieder/taenzer/andre.jpg', function: 'Beirat, Tänzer', activeSince: '1971', instrument: '' },
      { name: 'Brunauer Jakob', imgUrl: 'assets/mitglieder/placeholder.jpg', function: 'Tänzer', activeSince: '1981', instrument: '' },
      { name: 'Brunauer Maridi', imgUrl: 'assets/mitglieder/placeholder.jpg', function: 'Tänzerin', activeSince: '1981', instrument: '' },
      { name: 'Haslauer Paul', imgUrl: 'assets/mitglieder/ehrenmitglieder/pauli.jpg', function: 'Tänzer', activeSince: '1972', instrument: '' },
      { name: 'Haslauer Resi', imgUrl: 'assets/mitglieder/placeholder.jpg', function: 'Tänzerin', activeSince: '1972', instrument: '' },
    ];
    this.ehrenmitglieder = [
      { name: 'Haslauer Paul', imgUrl: 'assets/mitglieder/ehrenmitglieder/pauli.jpg', function: 'Ehrenmitglied', activeSince: '1972' },
      { name: 'Jischa Elfi', imgUrl: 'assets/mitglieder/ehrenmitglieder/elfi.jpg', function: 'Ehrenmitglied', activeSince: '1977' },
    ];
    this.eglseer = [
      { name: 'Buchegger Andrea', imgUrl: 'assets/mitglieder/eglseer/andrea_b.jpg', function: 'Tänzerin', activeSince: '1996' },
      { name: 'Fürstaller Verena', imgUrl: 'assets/mitglieder/taenzer/veri.jpg', function: 'Schriftführerin-Stv, Tänzerin', activeSince: '2001', instrument: '' },
      { name: 'Gmachl Christian', imgUrl: 'assets/mitglieder/eglseer/gmachi.jpg', function: 'Obamnn-Stv., Eglseer, DJET', activeSince: '1972' },
      { name: 'Helminger Benedikt', imgUrl: 'assets/mitglieder/taenzer/bene.jpg', function: 'Obmann-Stv., Tänzer ', activeSince: '2003', instrument: 'Schlagwerk' },
      { name: 'Helminger Sebastian', imgUrl: 'assets/mitglieder/taenzer/sebi.jpg', function: 'Tänzer', activeSince: '2003', instrument: 'Trompete' },
      { name: 'Perkhofer Franziskus', imgUrl: 'assets/mitglieder/taenzer/franzi.jpg', function: 'Tänzer', activeSince: '2015', instrument: '' },
      { name: 'Prähauser Michael', imgUrl: 'assets/mitglieder/taenzer/michi_p.jpg', function: 'Tänzer', activeSince: '2014', instrument: '' },
      { name: 'Schroffner Elisabeth', imgUrl: 'assets/mitglieder/taenzer/lilli.jpg', function: 'Kassier-Stv., Tänzerin', activeSince: '2006', instrument: 'Querflöte' },
      { name: 'Steinwender Michael', imgUrl: 'assets/mitglieder/taenzer/michael_s.jpg', function: 'Tänzer', activeSince: '2011', instrument: 'Klarinette' },
      { name: 'Zenker Barbara', imgUrl: 'assets/mitglieder/taenzer/babsi_z.jpg', function: 'Tänzerin', activeSince: '', instrument: 'Zither' },
      { name: 'Brunauer Markus', imgUrl: 'assets/mitglieder/taenzer/max.jpg', function: 'Vorplattler, Tänzer, Krampuss', activeSince: '1992', instrument: '' },
      { name: 'Ebner Katharina', imgUrl: 'assets/mitglieder/taenzer/kathi_e.jpg', function: 'Tänzer, DJET', activeSince: '2006', instrument: 'Horn, Gitarre' },
    ];
    this.tanzlmusi = [
      { name: 'Brandauer Jakob', imgUrl: 'assets/mitglieder/tanzlmusi/jakob.jpg', function: 'Tanzlmusi', activeSince: '1996', instrument: 'Flügelhorn, Trompete, Percussion' },
      { name: 'Brandauer Martin', imgUrl: 'assets/mitglieder/tanzlmusi/martin_b.jpg', function: 'Tanzlmusi', activeSince: '1994', instrument: 'Tenorhorn, Posaune' },
      { name: 'Brunauer Christoph', imgUrl: 'assets/mitglieder/taenzer/chrisi.jpg', function: 'Tänzer, Eglseer-Tanzlmusi', activeSince: '2005', instrument: 'Bass, Posaune' },
      { name: 'Brunauer Evelyn', imgUrl: 'assets/mitglieder/tanzlmusi/evelyn.jpg', function: 'Tanzlmusi', activeSince: '2004', instrument: 'Gitarre' },
      { name: 'Brunauer Hubert', imgUrl: 'assets/mitglieder/tanzlmusi/hubert.jpg', function: 'Tanzlmusi', activeSince: '1990', instrument: 'Steir. Harmonika, Oboe, Saxophon, Gitarre, uvm.' },
      { name: 'Hirnsberger Wolfgang', imgUrl: 'assets/mitglieder/tanzlmusi/woifi.jpg', function: 'Tanzlmusi', activeSince: '1991', instrument: 'Gitarre' },
      { name: 'Jischa Gitti', imgUrl: 'assets/mitglieder/tanzlmusi/gitti.jpg', function: 'Tanzlmusi', activeSince: '1977', instrument: 'Zither, Hackbrett, Gitarre, Kontrabass' },
    ];
  }

  ngOnInit() {
  }

  ngOnChanges() {
  }

}