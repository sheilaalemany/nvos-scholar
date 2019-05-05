import { Routes } from "@angular/router";
import { UserComponent } from "./user/user.component";
import { HomepageComponent } from "./homepage/homepage/homepage.component";
import { DisplayresultsComponent } from "./displayresults/displayresults.component";
import { ArticleinfoComponent } from "./articleinfo/articleinfo.component";
import { SignUpComponent } from "./user/sign-up/sign-up.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { SignInComponent } from "./user/sign-in/sign-in.component";
import { AuthGuard } from "./auth/auth.guard";
import { SearchHistoryComponent } from "./search-history/search-history.component";
import { ClickHistoryComponent } from "./click-history/click-history.component";
import {FeedbackHistoryComponent} from "./feedback-history/feedback-history.component";
import { OntologyComponent } from "./ontology/ontology.component";

export const appRoutes: Routes = [
  {
    path: "homepage",
    component: HomepageComponent
  },
  {
    path: "displayresults",
    component: DisplayresultsComponent
  },
  {
    path: "ontology",
    component: OntologyComponent
  },
  {
    path: "article",
    component: ArticleinfoComponent
  },
  {
    path: "signup",
    component: UserComponent,
    children: [
      {
        path: "",
        component: SignUpComponent
      }
    ]
  },
  {
    path: "userprofile",
    component: UserProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "searchhistory",
    component: SearchHistoryComponent
  },
  {
    path: "clickhistory",
    component: ClickHistoryComponent
  },
  {
    path: "feedbackhistory",
    component: FeedbackHistoryComponent
  },
  {
    path: "login",
    component: UserComponent,
    children: [
      {
        path: "",
        component: SignInComponent
      }
    ]
  },
  {
    /**
     * If a path is entered to the url and it is not defined here
     * then it will default to 'homepage'
     */
    path: "",
    redirectTo: "homepage",
    pathMatch: "full"
  }
];
