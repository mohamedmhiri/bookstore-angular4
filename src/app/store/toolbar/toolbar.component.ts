import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent {
  constructor(private auth: AuthService) {}
  login() {
    console.log('0')
    this.auth.login();
  }
  logout() {
    this.auth.logout();
  }
}
