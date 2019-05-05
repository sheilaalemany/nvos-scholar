import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router, NavigationExtras } from "@angular/router";
import * as $ from "jquery";
// import { UserService } from "../shared/user.service";

@Component({
  selector: "app-navbaraccount",
  templateUrl: "./navbaraccount.component.html",
  styleUrls: ["./navbaraccount.component.css"]
})
export class NavbarwithsearchComponent implements OnInit {
  constructor(
      private http: HttpClient,
      private router: Router) {}

  ngOnInit() {}

  // TO NAVIGATE TO ONTOLOGY PAGE
  navigate_ontology() {
    this.router.navigate(["ontology"]);
  }
}
