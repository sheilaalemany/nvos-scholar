import { Component, OnInit } from "@angular/core";
import { UserService } from "../shared/user.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-feedback-history",
  templateUrl: "./feedback-history.component.html",
  styleUrls: ["./feedback-history.component.css"]
})
export class FeedbackHistoryComponent implements OnInit {
  userDetails;
  constructor(private userService: UserService, private router: Router) {}

  //This function gets called when the page loads
  //Returns the user profile
  ngOnInit() {
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res["user"];
      },
      err => {}
    );
  }


  //Redirects to the profile page
  profile() {
    if (!this.userService.isLoggedIn()) {
      this.router.navigate(["/login"]);
    } else {
      this.router.navigate(["/userprofile"]);
    }
  }

  //Allows you to logout from the Click History page
  onLogout() {
    this.userService.deleteToken();
    this.router.navigate(["/login"]);
  }
}