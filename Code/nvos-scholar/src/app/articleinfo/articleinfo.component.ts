import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { UserService } from "../shared/user.service";
import { Router } from "@angular/router";
import { NgForm } from "@angular/forms";
import { User } from "../shared/user.model";

// import * as Highlight from './articleinfo';

@Component({
  selector: "app-articleinfo",
  templateUrl: "./articleinfo.component.html",
  styleUrls: ["./articleinfo.component.css"]
})

export class ArticleinfoComponent implements OnInit {
  response: any;
  article_info: any;
  article_title: any;
  concepts: any;
  authors: any;
  article: any;
  year: any;
  url: any;
  abstract: any;
  userDetails;
  query: string = window.location.search.substring(1).split("=")[1];
  selectedUser: User = {
    fullName: "",
    email: "",
    password: "",
    articles: [],
    search: [],
    click: [],
    feedback: []
  };
  constructor(
    private http: HttpClient,
    private userService: UserService,
    private router: Router,
  ) {}

  //This function gets called when the page opens
  //It will return the article information for the query thats in the URL
  //and assign the variables with their corresponding attributes
  ngOnInit() {
    this.http
      .get(
        "http://crest-cache-01.cs.fiu.edu:81/articles/article/_search?q=" +
          this.query
      )
      .subscribe(response => {
        //Set this.response to the JSON file
        this.response = response;
        //Set this.article_info to the JSON file to be sent to another component through the ArticleInformationService
        this.article = this.response.hits.hits[0];
        this.article_title = this.article._source.title;
        this.authors = this.article._source.authors;
        this.year = this.article._source.cover_date;
        this.url = this.article._source.url;
        this.abstract = this.article._source.abstract;
        this.concepts = this.article._source.keywords;
      });
  }

  //This function is called when the user clicks the Save link
  //It will get the article information and put it into an object to
  //then send over through the addArticle() function
  saveArticle(
    title: string,
    authors: Array<string>,
    year: string,
    abstract: string
  ) {
    var articleInfo = {
      articles: { title, authors, year, abstract }
    };
    this.userService.getUserProfile().subscribe(
      res => {
        this.userDetails = res["user"];
        this.userService.addArticle(articleInfo).subscribe();
        document.getElementById(title).innerHTML = "Saved!";
      },
      err => {}
    );
  }

 //Opens Save popup
  save_success(id) {
    var e = document.getElementById(id);
    if (e.style.display == "block") {
      e.style.display = "none";
    } else {
      e.style.display = "block";
    }
  }

  //Opens Cite popup (currently hard coded text since the JSON file
  //does not have citation information)
  toggle_cite(id) {
    var e = document.getElementById(id);
    if (e.style.display == "block") {
      e.style.display = "none";
    } else {
      e.style.display = "block";
    }
  }

  //Opens the Share popup
  share(id) {
    var e = document.getElementById(id);
    if (e.style.display == "block") {
      e.style.display = "none";
    } else {
      e.style.display = "block";
    }
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

  //============HIGHLIGHT TEXT============//
  highlight_text(abstract, text, id) {
    var e = document.getElementById(id);

    // Some abstracts do not have a period in the last sentence, so this was added to check for the period.
    // When there is no period, the regex does not identify it as a sentence.
    var last_char =  abstract[abstract.length-1];
    if(last_char != '.') {
      abstract = abstract + '.';
    }

    for(var key in text) {
      var concept = text[key].toString();
    }
    var sentences = abstract.match(/\(?[^\.\?\!]+[\.!\?]\)?/g);
    var i;
    for (i=0; i<sentences.length; i++) {
      if (sentences[i].toLowerCase().indexOf(concept) > -1) {
        sentences[i] = '<span style=\"background-color: yellow;\">'+sentences[i]+'</span>';
      }
    }
    var new_abstract = sentences.join(' ');
    e.innerHTML = new_abstract.toString();
  }

}
