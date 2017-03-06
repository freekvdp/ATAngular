import {LoginPageComponent} from "./login-page/login-page.component";
import {Routes, RouterModule} from "@angular/router";
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {ProjectPageComponent} from "./project-page/project-page.component";
/**
 * Created by Vlerkbook-pro on 17/02/2017.
 */

const APP_ROUTES: Routes = [
  //{path: 'gegevens', component: GegevensDetailComponent, canActivate: [LoginGuard, ChangepwGuard]},
  {path: 'login', component: LoginPageComponent},
  {path: 'home', component: LandingPageComponent},
  {path: 'projects/:project', component: ProjectPageComponent},

  {path: '**', redirectTo: '/home'},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

export const routes = RouterModule.forRoot(APP_ROUTES);
