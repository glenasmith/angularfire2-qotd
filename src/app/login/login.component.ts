import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private errorDuringLogin = false;

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    console.log("Starting Login Page. Authenticated is: " + this.loginService.isAuthenticated);
    if (this.loginService.isAuthenticated) {
      this.router.navigate(['/quotes']);

    } else {
      this.loginService.login().then((authState) => {
        if (authState && authState.uid) {
          console.log("Login successful for " + authState.auth.displayName);
          this.router.navigate(['/quotes']);
        } else {
          this.errorDuringLogin = true;
        }
      })
    };
  }

}
