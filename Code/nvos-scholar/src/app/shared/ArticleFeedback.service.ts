import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "../../environments/environment";
import { ArticleFeedback } from "./articleFeedback.model";
@Injectable({
    providedIn: "root"
})
export class ArticleFeedbackService {
    selectedFeeback: ArticleFeedback = {
        rating: 0,
        title: ""
    };
    constructor(private http: HttpClient) { }
    //HttpMethods

    //creates feedback
    rating(rating, title) {
        const obj = {
            rating: rating,
            title: title
        };
        
        return this.http.post(environment.apiBaseUrl + "/rating", obj);
    }
    //retrieves feedback number*/
   /* getRating() {
        return this.http.get(environment.apiBaseUrl + "/getRating");
    } 
    */
}
