import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.css"]
})
export class CategoryComponent implements OnInit {
  categories: any = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getCategories();
  }
  getCategories() {
    this.categories = [];
    this.apiService.getCategory().subscribe((data: {}) => {
      console.log(data);
      this.categories = data;
    });
  }
}
