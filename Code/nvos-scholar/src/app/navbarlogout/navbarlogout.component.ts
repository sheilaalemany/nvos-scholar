import { Component, OnInit } from "@angular/core";
import { UserService } from "../shared/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-navbarlogout",
  templateUrl: "./navbarlogout.component.html",
  styleUrls: ["./navbarlogout.component.css"]
})
export class NavbarlogoutComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit() {}

  //This function allows the user to logout from their profile page
  onLogout() {
    this.userService.deleteToken();
    this.router.navigate(["/login"]);
  }
}
