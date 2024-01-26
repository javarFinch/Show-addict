import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    FormsModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
    DividerModule,
    HttpClientModule,

  ],
  providers:[BrowserAnimationsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  usernameFormElement:string ='';
  passwordconf:string='';
  password1:string='';
  test:string='';
  newId:string='mine';
  strongStrength:string="/[!@#$]{1}[A-Za-z0-9]{1,}/"
  // strongStrength:string="/[A-Za-z0-9!@#$]{8,10}/"
  mediumStrength:string="/[A-Z0-9a-z!@#$]{4,7}/"
  usernameinvalid:boolean = false;
  usernamevalid:boolean= false;
  validUsernameUrl:string='/validUsername'
  passwordInvalid:boolean=false;
  passwordsdontmatch:boolean = false;
  constructor(private http:HttpClient) {
    
  }
  ngOnInit() {
    document.body.className="sign-up";
  }
  ngOnDestroy() {
    document.body.className="";

  }

  createAccount():void {
    console.log(`Username:${this.usernameFormElement},password:${this.password1},${this.passwordconf}`);

  }
  clear():void {
    this.usernameFormElement ='';
    this.password1='';
    this.passwordconf=''
  }
  validateUsername():void {
    this.http.get<boolean>(this.validUsernameUrl).subscribe(result => {this.usernamevalid= result;
      this.usernameinvalid = !result;
    });
  }
  validatePassword():void {
    const resp = this.password1.match("[A-Z]")
    console.log(`What match is resturning is: ${resp}`);
    
    if (this.password1.match("[A-Z]{1,}") && this.password1.match("[0-9]{1,}") && this.password1.match("[!@#$]{1,}")) {
      this.passwordInvalid = false;
      
    } else {
      this.passwordInvalid = true;
    }
  }
  validatePasswordConf():void {
    if (this.password1 === this.passwordconf) {
    this.passwordsdontmatch=false;
    } else {
      this.passwordsdontmatch = true;
    }

  }

}
