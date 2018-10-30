import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import {LoginService} from "../../services/login.service";
import {User} from "../../model/model.user";
@Component({
  selector: 'app-mapa-s',
  templateUrl: './mapa-s.component.html',
  styleUrls: ['./mapa-s.component.css']
})
export class MapaSComponent implements OnInit {
  lat: number = -0.174399;
  lng: number = -78.483414;
  latC:any;
  lngC:any;
  currentUser: User;
  permiso:string;
  constructor(public authService: LoginService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.permiso=this.currentUser.role;
    console.log(this.permiso);
   }

  ngOnInit() {
  }
  mapClicked($event: MouseEvent) {
    this.latC= $event.coords.lat;
    this.lngC= $event.coords.lng;
    console.log(this.latC,this.lngC);
  }
}
