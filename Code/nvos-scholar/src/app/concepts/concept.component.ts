import { Component, OnInit } from "@angular/core";
import { UserService } from "../shared/user.service";

@Component({
  selector: "app-concepts",
  templateUrl: "./concept.component.html",
  styleUrls: ["./concept.component.css"]
})
export class ConceptComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit() {}
}
