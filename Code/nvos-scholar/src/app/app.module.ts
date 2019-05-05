import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { HomepageComponent } from "./homepage/homepage/homepage.component";
import { DisplayresultsComponent } from "./displayresults/displayresults.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgxPaginationModule } from "ngx-pagination";
import { OrderModule } from "ngx-order-pipe";
import { ArticleinfoComponent } from "./articleinfo/articleinfo.component";
import { NavbarwithsearchComponent } from "./navbaraccount/navbaraccount.component";
import { NavbarlogoutComponent } from "./navbarlogout/navbarlogout.component";
import { FooterfixedComponent } from "./footerfixed/footerfixed.component";
import { FooterrelativeComponent } from "./footerrelative/footerrelative.component";
import { OntologyComponent } from "./ontology/ontology.component";
import { ConceptComponent } from "./concepts/concept.component";
import { UserComponent } from "./user/user.component";
import { SignUpComponent } from "./user/sign-up/sign-up.component";
import { UserService } from "./shared/user.service";
import { UserProfileComponent } from "./user-profile/user-profile.component";
import { SignInComponent } from "./user/sign-in/sign-in.component";
import { appRoutes } from "./routes";
import { AuthGuard } from "./auth/auth.guard";
import { AuthInterceptor } from "./auth/auth.interceptor";

import { JwSocialButtonsModule } from "jw-angular-social-buttons";
import { SearchHistoryComponent } from "./search-history/search-history.component";
import { ClickHistoryComponent } from "./click-history/click-history.component";
import { FeedbackHistoryComponent } from "./feedback-history/feedback-history.component";

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    DisplayresultsComponent,
    ArticleinfoComponent,
    NavbarwithsearchComponent,
    NavbarlogoutComponent,
    FooterfixedComponent,
    FooterrelativeComponent,
    OntologyComponent,
    ConceptComponent,
    UserComponent,
    SignUpComponent,
    UserProfileComponent,
    SignInComponent,
    SearchHistoryComponent,
    ClickHistoryComponent,
    FeedbackHistoryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    OrderModule,
    JwSocialButtonsModule
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    AuthInterceptor,
    AuthGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
