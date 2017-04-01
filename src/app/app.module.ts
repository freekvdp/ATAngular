import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HeaderComponent } from './header/header.component';
import { routes } from "./app.routing";
import { ProjectComponent } from './landing-page/project/project.component';
import { AppService } from "./app.service";
import { ProjectPageComponent } from './project-page/project-page.component';
import { ActorTemplateComponent } from './project-page/actor-template/actor-template.component';
import { SharedModule } from "./shared/shared.module";
import { AlertModule } from 'ng2-bootstrap';
import { NewProjectComponent } from "./landing-page/new-project/new-project.component";
import { NewActorTemplateComponent } from "./project-page/new-actor-template/new-actor-template.component";
import {AngularFireModule, AuthProviders, AuthMethods} from 'angularfire2';
import {NewActorFormComponent} from "./shared/persondetail-sidebar/new-actor-form/new-actor-form.component";

// Initialize Firebase
export const dbconfig = {
  apiKey: "AIzaSyCbca2rS3GQhFbbexNy06Ko1gZDGAXDMnI",
  authDomain: "actor-template-app.firebaseapp.com",
  databaseURL: "https://actor-template-app.firebaseio.com",
  storageBucket: "actor-template-app.appspot.com",
  messagingSenderId: "495211175078"
};

const myFirebaseAuthConfig = {
  provider: AuthProviders.Password,
  method: AuthMethods.Password
};

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginPageComponent,
    HeaderComponent,
    ProjectComponent,
    ProjectPageComponent,
    NewProjectComponent,
    ActorTemplateComponent,
    NewActorTemplateComponent
  ],
  imports: [
    AlertModule.forRoot(),
    AngularFireModule.initializeApp(dbconfig,myFirebaseAuthConfig),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    SharedModule,
    routes
  ],
  providers: [
    AppService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
