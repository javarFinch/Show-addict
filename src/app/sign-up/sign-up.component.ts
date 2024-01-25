import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { DividerModule } from 'primeng/divider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    FormsModule,
    PasswordModule,
    InputTextModule,
    ButtonModule,
    DividerModule

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

}
