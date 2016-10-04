import { ModuleWithProviders, Injectable } from '@angular/core';
import { Routes, RouterModule, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { QuotelistComponent } from './quotelist/quotelist.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { LoggedInGuard } from './login.guard';
import { LoginComponent } from './login/login.component';


const appRoutes: Routes = [
    { path: '',  redirectTo: '/quotes',  pathMatch: 'full'},
    { path: 'quotes', component: QuotelistComponent, canActivate: [LoggedInGuard] },
    { path: 'login', component: LoginComponent }
];

export const appRoutingProviders: any[] = [
    LoggedInGuard
];

export const routing : ModuleWithProviders = RouterModule.forRoot(appRoutes); 

