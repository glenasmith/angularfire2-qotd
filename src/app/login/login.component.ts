import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService : LoginService, private router : Router) { }

  ngOnInit() {
    if (this.loginService.isAuthenticated) {
      this.router.navigate(['/quotes']);
    }
    this.loginService.login().then( (authState) => {
      if (authState && authState.uid) {
        console.log("Login is WIN for " + authState.uid);
        this.router.navigate(['/quotes']);
      } 
    });
  }

}
