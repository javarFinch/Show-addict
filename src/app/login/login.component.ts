import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule } from 'primeng/button';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Users } from '../Users';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    RouterModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
    HttpClientModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usernameFormElement:string = ""
  passwordFormElement:string=""
  loading:boolean=false;
  loginUrl:string="http://localhost:8080/users/login";
  loggedInUser:Users | undefined;

  constructor(private http:HttpClient) {
  }
  ngOnInit() {
    document.body.className="login";
  }
  ngOnDestroy() {
    document.body.className="";

  }

  signIn() {
    this.loading = true;
    this.http.get<Users>(this.loginUrl,{headers: new HttpHeaders({"username":this.usernameFormElement,"password":this.passwordFormElement})}).subscribe(resp =>{
      console.log(`returned from server with User ${resp}`);
      if (resp) {
        this.loggedInUser = resp;
        console.log(`User is now ${this.loggedInUser.username}`);
        this.loading = false;

      }
    })
  }

}
