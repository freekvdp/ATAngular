import {Injectable} from "@angular/core";
import {Router} from "@angular/router";
import {AngularFire, AuthProviders, AuthMethods} from "angularfire2";
import {DataService} from "./data.service";
import {PersondetailSidebarService} from "./persondetail-sidebar/persondetail-sidebar.service";
import {AppService} from "../app.service";

/**
 * Created by Vlerkbook-pro on 06/03/2017.
 */

@Injectable()
export class AuthService {

  constructor(private af: AngularFire,
              private sidebar : PersondetailSidebarService,
              private dataService : DataService,
              private router: Router) {
  }

  signInWithCredentials(user) {
    this.af.auth.login({ email: user.email, password: user.password })
      .then((user) => {
      console.log(user);
        this.dataService.userid = user.uid;
        this.router.navigate(['/home']);
      });
  }

  signInWithGoogle() {
    this.af.auth.login({
      provider: AuthProviders.Google,
      method: AuthMethods.Popup
    }).then((user) => {
      this.dataService.userid = user.uid;
      this.router.navigate(['/home'])
      /*GoogleSignInAccount acct = result.getSignInAccount();
       String personName = acct.getDisplayName();
       String personGivenName = acct.getGivenName();
       String personFamilyName = acct.getFamilyName();
       String personEmail = acct.getEmail();
       String personId = acct.getId();
       Uri personPhoto = acct.getPhotoUrl();*/
    });
  }

  signInWithFacebook() {
    this.af.auth.login({
      provider: AuthProviders.Facebook,
      method: AuthMethods.Popup
    });
    this.router.navigate(['/home']);
  }

  signOut() {
    this.sidebar.closeSidebar();
    this.af.auth.logout();
    this.router.navigate(['/login']);
  }

  isAuthenticated() {
    let user = null;
    this.af.auth.subscribe(x=> {if(x) user= x.uid });
    return (!!user) ? [user,true] : [user,false];
  }
}
