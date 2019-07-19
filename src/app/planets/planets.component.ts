import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";

@Component({
  selector: "app-planets",
  templateUrl: "./planets.component.html",
  styleUrls: ["./planets.component.css"]
})
export class PlanetsComponent implements OnInit {
  planets: any = [];
  header = "Planets";
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getPlanets();
  }
  getPlanets() {
    this.planets = [];
    this.apiService.getPlanets().subscribe((data: {}) => {
      console.log(data);
      this.planets = data;
    });
  }
}