/**
 * Created by Vlerkbook-pro on 06/03/2017.
 */

declare const firebase: any;

export class AuthService {

  signUp(user) {
    firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
      .catch(function (error) {
        console.log(error);
      });
  }

  signIn(user) {
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .catch(function (error) {
        console.log(error);
      });
  }

  signOut() {
    firebase.autth().signOut();
  }
  isAuthenticated() {
    const user = firebase.auth().currentUser;

    if(user){

    } else {

    }
  }

}
