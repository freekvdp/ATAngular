import {LoginPageComponent} from "./login-page/login-page.component";
import {Routes, RouterModule} from "@angular/router";
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {ProjectPageComponent} from "./project-page/project-page.component";
import {AuthGuard} from "./shared/auth.guard";
/**
 * Created by Vlerkbook-pro on 17/02/2017.
 */

const APP_ROUTES: Routes = [
  //{path: 'gegevens', component: GegevensDetailComponent, canActivate: [LoginGuard, ChangepwGuard]},
  {path: 'login', component: LoginPageComponent},
  {path: 'home', component: LandingPageComponent, canActivate: [AuthGuard]},
  {path: 'projects/:project', component: ProjectPageComponent, canActivate: [AuthGuard]},

  {path: '**', redirectTo: '/login'},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

export const routes = RouterModule.forRoot(APP_ROUTES);
