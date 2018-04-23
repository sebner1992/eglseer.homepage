import { Routes } from '@angular/router';
import { GalleryComponent } from './app/gallery/gallery.component';
import { LoginComponent } from './app/login/login.component';
import { MembersComponent } from './app/members/members.component';
import { UploadComponent } from './app/upload/upload.component';
import { AuthenticationGuard } from './app/services/authenticationGuard.service';
import { HomeComponent } from './app/home/home.component';
import { TermineComponent } from './app/termine/termine.component';
import { VerbindungenComponent } from './app/verbindungen/verbindungen.component';
import { ImpressumComponent } from './app/impressum/impressum.component';
import { KontaktComponent } from './app/kontakt/kontakt.component';
import { VolkstanzComponent } from './app/volkstanz/volkstanz.component';
import { PlattlerComponent } from './app/plattler/plattler.component';
import { TanzlmusiComponent } from './app/tanzlmusi/tanzlmusi.component';
import { SaitenspielerComponent } from './app/saitenspieler/saitenspieler.component';
import { KrampusseComponent } from './app/krampusse/krampusse.component';
import { SonstigesComponent } from './app/sonstiges/sonstiges.component';
import { BraeucheComponent } from './app/braeuche/braeuche.component';
import { TrachtComponent } from './app/tracht/tracht.component';
import { ChronikComponent } from './app/chronik/chronik.component';
import { JugendtanztComponent } from './app/jugendtanzt/jugendtanzt.component';

export const appRoutes: Routes = [
    { path: 'braeuche', component: BraeucheComponent },
    { path: 'tracht', component: TrachtComponent },
    { path: 'chronik', component: ChronikComponent },
    { path: 'jugendtanzt', component: JugendtanztComponent },
    { path: 'home', component: HomeComponent },
    { path: 'sonstiges', component: SonstigesComponent },
    { path: 'krampusse', component: KrampusseComponent },
    { path: 'saitenspieler', component: SaitenspielerComponent },
    { path: 'termine', component: TermineComponent },
    { path: 'verbindungen', component: VerbindungenComponent },
    { path: 'volkstanz', component: VolkstanzComponent },
    { path: 'impressum', component: ImpressumComponent },
    { path: 'kontakt', component: KontaktComponent },
    { path: 'gallery', component: GalleryComponent},
    { path: 'plattler', component: PlattlerComponent },
    { path: 'tanzlmusi', component: TanzlmusiComponent },
    { path: 'upload', component: UploadComponent, canActivate: [AuthenticationGuard]},
    { path: 'members', component: MembersComponent},
    { path: '', redirectTo: '/home', pathMatch: 'full'},
    { path: 'login', component: LoginComponent},
];