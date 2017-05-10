import { Auth } from './../../../services/custom-auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'store-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  dropDown: string = ''
  constructor(private auth: Auth) {}
  ngOnInit() {
  }

  showDrowDown() {
    
  }

}
