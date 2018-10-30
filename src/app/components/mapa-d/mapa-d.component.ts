import { Component, OnInit } from '@angular/core';
import { MouseEvent } from '@agm/core';
import {LoginService} from "../../services/login.service";
import {User} from "../../model/model.user";
@Component({
  selector: 'app-mapa-d',
  templateUrl: './mapa-d.component.html',
  styleUrls: ['./mapa-d.component.css']
})
export class MapaDComponent implements OnInit {
  lat: number = -0.174399;
  lng: number = -78.483414;
  public origin: any
  public destination: any
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
    this.getDirection()
  }
   
  getDirection() {
    this.origin = { lat: this.lat, lng: this.lng }
    this.destination = { lat: -0.167765, lng: -78.489688 } 

  }
  mapClicked($event: MouseEvent) {
    this.latC= $event.coords.lat;
    this.lngC= $event.coords.lng;
    this.destination= {lat: this.latC, lng: this.lngC}
    console.log(this.latC,this.lngC);
  }

}
