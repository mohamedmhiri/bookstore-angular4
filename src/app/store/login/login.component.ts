import { Auth } from './../../services/custom-auth.service';
import { Component, OnInit } from '@angular/core';
declare let jsPDF;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login= {
    email: '' ,
    password: ''
  }
  constructor(private auth: Auth) {}

  ngOnInit() {
    this.login.email = 'enter your e-mail'
    this.login.password = 'enter your password'
    
  }
  /*public download() {
        
        var doc = new jsPDF();
        doc.text(20, 20, 'Hello world!');
        doc.text(20, 30, 'This is client-side Javascript, pumping out a PDF.');
        doc.addPage();
        doc.text(20, 20, 'Do you like that?');
        // Save the PDF
        doc.save('Test.pdf');
  }*/


}
