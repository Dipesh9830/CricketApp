import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './modules/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './modules/header/header.component';

import { TeamsComponent } from './Teams/teams.component';
import { PlayersComponent } from './modules/Players/players.component';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './modules/Home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { MatchesComponent } from './modules/Matches/matches.component';


const appRoutes: Routes =[
  {path: '', component: HomeComponent},
  {path: 'matches', component: MatchesComponent},
  {path: 'players', component: PlayersComponent},
  {path: 'teams', component: TeamsComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    PlayersComponent,
    TeamsComponent,
    MatchesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent],
schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
