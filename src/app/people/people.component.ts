import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";

@Component({
  selector: "app-people",
  templateUrl: "./people.component.html",
  styleUrls: ["./people.component.css"]
})
export class PeopleComponent implements OnInit {
  people: any = [];
  header = "People";

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getPeople();
  }
  getPeople() {
    this.people = [];
    this.apiService.getPeople().subscribe((data: {}) => {
      console.log(data);
      this.people = data;
    });
  }
}

