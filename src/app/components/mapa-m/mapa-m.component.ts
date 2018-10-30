import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../services/login.service";
import {User} from "../../model/model.user";
@Component({
  selector: 'app-mapa-m',
  templateUrl: './mapa-m.component.html',
  styleUrls: ['./mapa-m.component.css']
})
export class MapaMComponent implements OnInit {
  lat: number = -0.174399;
  lng: number = -78.483414;
  currentUser: User;
  permiso:string;
  constructor(public authService: LoginService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.permiso=this.currentUser.role;
    console.log(this.permiso);
   }

  ngOnInit() {
  }

}
