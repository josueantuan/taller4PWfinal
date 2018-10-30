import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'taller4PW';
  static API_URL="http://localhost:8080";
  lat: number = 51.678418;
  lng: number = 7.809007;
}
