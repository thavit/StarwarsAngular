import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";

@Component({
  selector: "app-vehicles",
  templateUrl: "./vehicles.component.html",
  styleUrls: ["./vehicles.component.css"]
})
export class VehiclesComponent implements OnInit {
  vehicles: any = [];
  header = "Vehicles";
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getVehicles();
  }
  getVehicles() {
    this.vehicles = [];
    this.apiService.getVehicles().subscribe((data: {}) => {
      console.log(data);
      this.vehicles = data;
    });
  }
}
