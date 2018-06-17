import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CarouselModule } from 'ngx-bootstrap';
import { AlertModule } from 'ngx-bootstrap';
import { environment } from '../environments/environment';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument} from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { GalleryComponent } from './gallery/gallery.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { UploadComponent } from './upload/upload.component';

import { AuthenticationGuard } from './services/authenticationGuard.service';
import { AuthenticationService } from './services/authentication.service';
import { ImageService } from './services/image.service';
import { UploadService } from './services/upload.service';
import { AppointmentService } from './services/appointment.service';

import { appRoutes } from '../routes';
import { Globals } from './globals/globals';
import { MembersComponent } from './members/members.component';
import { HomeComponent } from './home/home.component';
import { TermineComponent } from './termine/termine.component';
import { VerbindungenComponent } from './verbindungen/verbindungen.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { VolkstanzComponent } from './volkstanz/volkstanz.component';
import { PlattlerComponent } from './plattler/plattler.component';
import { TanzlmusiComponent } from './tanzlmusi/tanzlmusi.component';
import { SaitenspielerComponent } from './saitenspieler/saitenspieler.component';
import { KrampusseComponent } from './krampusse/krampusse.component';
import { SonstigesComponent } from './sonstiges/sonstiges.component';
import { BraeucheComponent } from './braeuche/braeuche.component';
import { TrachtComponent } from './tracht/tracht.component';
import { ChronikComponent } from './chronik/chronik.component';
import { JugendtanztComponent } from './jugendtanzt/jugendtanzt.component';
import { ImageDetailComponent } from './image-detail/image-detail.component';
import { NewsComponent } from './news/news.component';


@NgModule({
  declarations: [
    AppComponent,
    GalleryComponent,
    NavbarComponent,
    LoginComponent,
    UploadComponent,
    MembersComponent,
    HomeComponent,
    TermineComponent,
    VerbindungenComponent,
    ImpressumComponent,
    KontaktComponent,
    VolkstanzComponent,
    PlattlerComponent,
    TanzlmusiComponent,
    SaitenspielerComponent,
    KrampusseComponent,
    SonstigesComponent,
    BraeucheComponent,
    TrachtComponent,
    ChronikComponent,
    JugendtanztComponent,
    ImageDetailComponent,
    NewsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    CarouselModule.forRoot(),
    AlertModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule
  ],
  providers: [
    AuthenticationGuard,
    AuthenticationService,
    ImageService,
    UploadService,
    AppointmentService,
    AngularFirestore,
    Globals
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
