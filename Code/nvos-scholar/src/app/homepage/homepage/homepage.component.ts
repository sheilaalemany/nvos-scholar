import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UserService } from "../../shared/user.service";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-homepage",
  templateUrl: "./homepage.component.html",
  styleUrls: ["./homepage.component.css"]
})
export class HomepageComponent implements OnInit {
  constructor(public userService: UserService) {}
  ngOnInit() {}

  /**
   *
   * This function gets called when a user submits a search
   * It will redirect to the displayresults page with the search query entered
   */
  openSearchPage(form: NgForm) {
    window.location.href =
      "http://localhost:4200/displayresults?search=" + form.value.search;
  }

  //============FEEDBACK============//
  feedback() {
    var question1 = prompt("How do you like the website?", "I love it!");
    var question2 = prompt("Rate your experience: 1-10", "10");
    /*if (!this.userService.isLoggedIn()) {
      this.router.navigateByUrl("/login");
    };*/
    var answer1 = {
      question: { question1, question2 }
    };

    this.userService.question(answer1).subscribe();
  }
}
