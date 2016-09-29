import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import * as firebase from 'firebase';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { routing,
         appRoutingProviders } from './app.routing';

import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { MenuComponent } from './menu/menu.component';
import { QuotelistComponent } from './quotelist/quotelist.component';

import { LoginService } from './login.service';
import { LoginComponent } from './login/login.component';

export const firebaseConfig = {
    apiKey: "AIzaSyAtkDOebowUCsSF8efOL_0yup1DKCCan00",
    authDomain: "qotd-caac8.firebaseapp.com",
    databaseURL: "https://qotd-caac8.firebaseio.com",
    storageBucket: "qotd-caac8.appspot.com",
    messagingSenderId: "922026910241"
  };

export const firebaseAuthConfig = {
  provider: AuthProviders.Google,
  method: AuthMethods.Popup
}


@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    MenuComponent,
    QuotelistComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig, firebaseAuthConfig),
    routing

  ],
  providers: [LoginService, appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
