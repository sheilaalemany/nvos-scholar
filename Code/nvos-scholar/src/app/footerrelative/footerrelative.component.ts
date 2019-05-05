import { Component, OnInit } from "@angular/core";
import { UserService } from "../shared/user.service";

@Component({
  selector: "app-footerrelative",
  templateUrl: "./footerrelative.component.html",
  styleUrls: ["./footerrelative.component.css"]
})
export class FooterrelativeComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit() {}

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
