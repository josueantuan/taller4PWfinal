import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { MenuComponent } from './components/menu/menu.component';
//-----------------Rutas---------------------------------
import { appRoutingProviders, routing } from "./app.routing";
import { FormsModule } from '@angular/forms';
import {HttpModule} from "@angular/http";
import { MapaDComponent } from './components/mapa-d/mapa-d.component';
import { MapaSComponent } from './components/mapa-s/mapa-s.component';
import { MapaMComponent } from './components/mapa-m/mapa-m.component';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction'
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    MenuComponent,
    MapaDComponent,
    MapaSComponent,
    MapaMComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBbsOlMryAHu2ESwHHSwrDBIUU7fiENNoM'
    }),
    AgmDirectionModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent],
  
})
export class AppModule { }
