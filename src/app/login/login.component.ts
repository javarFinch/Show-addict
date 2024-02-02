import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PasswordModule } from 'primeng/password';
import { InputTextModule } from 'primeng/inputtext';
import {ButtonModule } from 'primeng/button';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Users } from '../Users';
import { Router, RouterModule } from '@angular/router';
import { UserServiceService } from '../user-service.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    FormsModule,
    RouterModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
    HttpClientModule,
    RouterModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  usernameFormElement:string = ""
  passwordFormElement:string=""
  loading:boolean=false;
  loginUrl:string="http://localhost:8080/users/login";
  loggedInUser:Users | null = null;

  constructor(private http:HttpClient,
              private userService:UserServiceService,
              private router:Router
              ) {
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
        this.loggedInUser.authenticated=true;
        //send logged user to service somehow
        this.userService.setLoggedUser(this.loggedInUser);
        console.log(`User is now ${this.loggedInUser.username}`);
        this.loading = false;
        this.router.navigateByUrl(`/dashboard/home?user=${this.usernameFormElement}`);

      } else {
        //set boolean variable for wrong password or username message
        this.loading=false;
        this.usernameFormElement='';
        this.passwordFormElement=''
      }
    })
  }

}
