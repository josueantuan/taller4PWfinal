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
  itemsGender: any[] = [{genero:"Masculino"}, {genero:"Femenino"}]
  itemsNacio: any[] = [{nacionalidad:"Ecuatoriano"},{nacionalidad:"Venezolano"},{nacionalidad:"Cubano"}]
  constructor(public accountService: RegistroService, public router: Router) {
  }

  ngOnInit() {
  }
  register() {
    console.log(this.reg);
    this.accountService.createAccount(this.reg).subscribe(data => {
        this.router.navigate(['/login']);
      }, err => {
        console.log(err);
        this.errorMessage = "El dato registrado ya existe";
      }
    )
  }
  onlyNumberKey(event) {
    return (event.charCode == 8 || event.charCode == 0) ? null : event.charCode >= 48 && event.charCode <= 57;
  }
  onlyLetters(event){
    let tecla = (document.all) ? event.keyCode : event.which;

    //Tecla de retroceso para borrar, siempre la permite
    if (tecla == 8) {
        return true;
    }

    // Patron de entrada, en este caso solo acepta numeros y letras
    let patron = /[A-Za-z]/;
    let tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
  }
  address(event){
    let tecla = (document.all) ? event.keyCode : event.which;

    //Tecla de retroceso para borrar, siempre la permite
    if (tecla == 8) {
        return true;
    }

    // Patron de entrada, en este caso solo acepta numeros y letras
    let patron = /[A-Za-z0-9- ]/;
    let tecla_final = String.fromCharCode(tecla);
    return patron.test(tecla_final);
  }
}
