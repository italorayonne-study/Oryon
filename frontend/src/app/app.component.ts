import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  readonly apiURL: string;
  data: any = [];

  constructor(private http: HttpClient) {
    this.apiURL = 'http://localhost:5031';
  }

  ngOnInit() {
    this.refresh();
  }

  title = 'frontend';

  refresh() {
    this.http
      .get(`${this.apiURL}/WeatherForecast`)
      .subscribe((result) => (this.data = result));
  }
}
