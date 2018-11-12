import { Injectable } from '@angular/core';
import {User} from "../model/model.user";
import {Http} from "@angular/http";
import {AppComponent} from "../app.component"
import {Registro} from "../model/registro";
@Injectable({
  providedIn: 'root'
})
export class RegistroService {
  options: any;
  constructor(public http: Http) { }
  createAccount(user:Registro){
    return this.http.post(AppComponent.API_URL+'/account/register',user)
      .map(resp=>resp.json());
  }
  public callPostService(url: string, data?: any, callMethod?: string) {
    return new Promise((resolve, reject) => {
      this.http.post(AppComponent.API_URL + url, data, this.options).toPromise()
        .then(res => {
          return resolve(res.json())
        },
          err => {
            console.log(callMethod, err);
          });
    });
  }

  private callGetService(url: string, method: any) {
    return new Promise((resolve, reject) => {
      this.http.get(AppComponent.API_URL + url, this.options).toPromise()
        .then(res => resolve(res.json()),
          err => {
            console.log("callGetService =>" + method, err);
          });
    });
  }
  
}
