import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";

@Component({
  selector: "app-species",
  templateUrl: "./species.component.html",
  styleUrls: ["./species.component.css"]
})
export class SpeciesComponent implements OnInit {
  species: any = [];
  header = "Species";
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getSpecies();
  }
  getSpecies() {
    this.species = [];
    this.apiService.getSpecies().subscribe((data: {}) => {
      console.log(data);
      this.species = data;
    });
  }
}
