import {Component, OnInit} from '@angular/core';
import {User} from "../../model/model.user";
import { RegistroService } from "../../services/registro.service";
import {Router} from "@angular/router";
import { Registro } from "../../model/registro";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = new User();
  errorMessage: string;
  reg: Registro = new Registro();
  constructor(public accountService: RegistroService, public router: Router) { }

  ngOnInit() {
  }
  register() {
    console.log(this.reg);
    this.accountService.createAccount(this.reg).subscribe(data => {
        this.router.navigate(['/login']);
      }, err => {
        console.log(err);
        this.errorMessage = "username already exist";
      }
    )
  }
}
