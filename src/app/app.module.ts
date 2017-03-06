import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { HeaderComponent } from './header/header.component';
import { routes } from "./app.routing";
import { ProjectComponent } from './landing-page/project/project.component';
import {AppService} from "./app.service";
import { ProjectPageComponent } from './project-page/project-page.component';
import { ActorTemplateComponent } from './project-page/actor-template/actor-template.component';
import {SharedModule} from "./shared/shared.module";
import { AlertModule } from 'ng2-bootstrap';
import {PersondetailSidebarComponent} from "./shared/persondetail-sidebar/persondetail-sidebar.component";


@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginPageComponent,
    HeaderComponent,
    ProjectComponent,
    ProjectPageComponent,
    ActorTemplateComponent
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    SharedModule,
    routes
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
