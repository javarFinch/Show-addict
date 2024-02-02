import { Routes } from '@angular/router';
import { HomeComponent, homeGuard } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';

export const routes: Routes = [
    {path:"dashboard/home", component:HomeComponent,canActivate: [homeGuard]},
    {path:"signup",component:SignUpComponent},
    {path:"**",component:LoginComponent},
    
];
