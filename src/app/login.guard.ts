
import { LoginService } from './login.service';
import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class LoggedInGuard implements CanActivate {
    constructor(private loginService: LoginService, private router: Router) { }

    canActivate(): boolean {

        console.log("Guard function has been invoked");

        let authenticated = false;

        if (this.loginService.isAuthenticated) {
            authenticated = true;
        }
        else {
            this.router.navigate(['/login']);
        }
        console.log("Returning from Guard function with: " + authenticated);
        return authenticated;
    }
}