import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule } from 'primeng/button';


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
  ngOnInit() {
    document.body.className="login";
  }
  ngOnDestroy() {
    document.body.className="";

  }

  signIn() {
    console.log('Sign In clicked');
  }

}
