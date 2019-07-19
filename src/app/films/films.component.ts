import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";

@Component({
  selector: "app-films",
  templateUrl: "./films.component.html",
  styleUrls: ["./films.component.css"]
})
export class FilmsComponent implements OnInit {
  header = 'Films'
  films: any = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getFilms();
  }

  getFilms() {
    this.films = [];
    this.apiService.getFilms().subscribe((data: {}) => {
      console.log(data);
      this.films = data;
    });
  }
}