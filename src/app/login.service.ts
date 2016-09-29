import { Injectable } from '@angular/core';
import { AngularFire, AuthProviders, AuthMethods, FirebaseAuthState } from 'angularfire2';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class LoginService {

  public isAuthenticated = false;
  public userId: string = '';

  constructor(private af: AngularFire) {
    console.log("Sparking a new LoginService");
    // af.auth.subscribe((auth) => {
    //   console.log(auth);
    //   if (auth) {
    //     this.userId = auth.uid;
    //     this.isAuthenticated = true;
    //   } 
    // }, (err => {
    //   console.log("Login Error: " + err);
    // }));

  }

  login(): firebase.Promise<FirebaseAuthState> {
    return this.af.auth.login({
      // method: AuthMethods.Popup
    }).then((auth) => {
      if (auth) {
        console.log(auth);
        this.userId = auth.uid;
        this.isAuthenticated = true;
        return auth;
      }
    }).catch((err) => {
      console.log(err);
    });
  }

  logout() {
    this.isAuthenticated = false;
    this.af.auth.logout();
  }

}
