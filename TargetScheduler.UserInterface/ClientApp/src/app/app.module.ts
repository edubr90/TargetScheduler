import { BrowserModule, } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { AgendaComponent } from './agenda/agenda.component';
import { AgendaEditarComponent } from './agendaEditar/agendaEditar.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppService } from './shared/app.service';
import { NormalizarDatePipe } from './shared/pipes/normalizar-date-pipe';
import { NormalizarDateTimePipe } from './shared/pipes/normalizar-date-time-pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime'

import { library as fontLibrary } from '@fortawesome/fontawesome-svg-core';
import { faCalendar, faClock } from '@fortawesome/free-regular-svg-icons';

fontLibrary.add(
    faCalendar,
    faClock
);

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    AgendaComponent,
        AgendaEditarComponent,
        NormalizarDatePipe,
        NormalizarDateTimePipe,
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
        FormsModule,
        FontAwesomeModule,
        OwlDateTimeModule,
        OwlNativeDateTimeModule,
    NgbModule,
    RouterModule.forRoot([
        { path: '', component: HomeComponent, pathMatch: 'full' },
        { path: 'home', component: HomeComponent },
        { path: 'adicionarNovo', component: AgendaEditarComponent },
        { path: 'editarAgenda/:id', component: AgendaEditarComponent },
        { path: 'agenda', component: AgendaComponent },
        { path: '**', redirectTo: 'home' }

    ])
    ],
    providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
