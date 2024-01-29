import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule } from 'primeng/button';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    PasswordModule,
    InputTextModule,
    ButtonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usernameFormElement:string = ""
  passwordFormElement:string=""
  loading:boolean=false;
  loginUrl:string="http://localhost:8080/users/login"
  constructor(private http:HttpClient) {

  }
  ngOnInit() {
    document.body.className="login";
  }
  ngOnDestroy() {
    document.body.className="";

  }

  signIn() {
    this.http.get(this.loginUrl)
  }

}
