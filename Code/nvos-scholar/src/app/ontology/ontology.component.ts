import { Component, AfterContentInit } from "@angular/core";
import { UserService } from "../shared/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-click-history",
  templateUrl: "./ontology.component.html",
  styleUrls: ["./ontology.component.css"]
})
export class OntologyComponent implements AfterContentInit {
  userDetails;
  constructor(private userService: UserService, private router: Router) {}

  //This function gets called when the page loads
  //Returns the user profile
  ngAfterContentInit() {

  }
}
