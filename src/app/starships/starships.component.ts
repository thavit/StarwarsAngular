import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";

@Component({
  selector: "app-starships",
  templateUrl: "./starships.component.html",
  styleUrls: ["./starships.component.css"]
})
export class StarshipsComponent implements OnInit {
  starships: any = [];
  header = "Starships";
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getStarships();
  }
  getStarships() {
    this.starships = [];
    this.apiService.getStarships().subscribe((data: {}) => {
      console.log(data);
      this.starships = data;
    });
  }
}
