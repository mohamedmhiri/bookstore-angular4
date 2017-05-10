import { AppConfig } from './../config/app-config';
import { Http } from '@angular/http';
// services/auth.service.ts
import { tokenNotExpired } from 'angular2-jwt';

import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
// We want to avoid any 'name not found'
// warnings from TypeScript
declare let Auth0Lock: any;

@Injectable()
export class AuthService {
  constructor(private _http: Http, private _config: AppConfig, private _router: Router, private _zone: NgZone) { }
  lock = new Auth0Lock('MQTjbGf8WjDPFrYvEomXCSAV32FGUy4C', 'bookstore-ppp.eu.auth0.com');

  login() {
    console.log('=======')
    this.lock.show((error: string, profile: Object, id_token: string) => {
      console.log('///////')
      if (error) {
        console.log(error);
      }
      console.log('1')
      // We get a profile object for the user from Auth0
      localStorage.setItem('profile', JSON.stringify(profile));
      console.log('2')
      // We also get the user's JWT
      localStorage.setItem('id_token', id_token);
      console.log('3')
      /*this._router.navigate(['catalog']);
			let test = this.loggedIn();
			this._zone.run(() => {});*/
    });
  }

  logout() {
    // To log out, we just need to remove
    // the user's profile and token
    localStorage.removeItem('profile');
    localStorage.removeItem('id_token');
    this._router.navigate(['toolbar']);
  }

  loggedIn(): boolean {
    return tokenNotExpired();
  }
}