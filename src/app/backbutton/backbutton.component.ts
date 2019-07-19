import { Location } from "@angular/common";
import { Component, Input } from "@angular/core";

@Component({
  selector: "back-button",
  templateUrl: './backbutton.component.html',
})
export class BackbuttonComponent {
  @Input() color: string;

  constructor(private location: Location) { }

  goBack() {
    this.location.back();
  }
}
