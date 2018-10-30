import { Component, OnInit } from '@angular/core';
import {User} from "../../model/model.user";
import { LoginService } from "../../services/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: User=new User();
  errorMessage:string;
  role:string;
  constructor(private authService :LoginService, private router: Router) {
    
   }
  ngOnInit() {
  }
  login(){
    this.authService.logIn(this.user)
      .subscribe(data=>{
        this.router.navigate(['/menu']);
        
        },err=>{
        this.errorMessage="Nombre de usuario o constreña incorrectos";
        }
      )
      
  }
}
