import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const routes: Routes = [
    {path:"home", component:HomeComponent},
    {path:"signup",component:SignUpComponent},
    {path:"**",component:LoginComponent},
    
];
