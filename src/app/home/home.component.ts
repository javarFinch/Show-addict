import { Component, inject } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { Users } from '../Users';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivateFn, Router, RouterModule, RouterStateSnapshot, UrlTree } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { UserServiceService } from '../user-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CarouselModule,
    HttpClientModule,
    RouterModule,
    CommonModule
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  strings:String[] = ["Hi", "This","Is","In","a","Carousel!!!","How","Cool!!"];
  user:Users | null={id:0,username:'',password:''}
  showUser:boolean=false
  UserUrl:string = "http://localhost:8080/users/findUser"
  constructor(private http:HttpClient, private route:ActivatedRoute, private userService:UserServiceService) { 
  }
  ngOnInit() {
    this.userService.currentUser.subscribe(currentUser => {
      this.user = currentUser;
    })
    const username = this.route.snapshot.queryParamMap.get('user');
    console.log(`username:${username}`);
    if (username) {
    this.http.get<Users>(this.UserUrl,{headers: new HttpHeaders({"username":username})}).subscribe(
      user => {
        this.user = user;
        this.user.authenticated=true;
        this.showUser=true

      }
    )
    }
  }
  }

  export const homeGuard:CanActivateFn = (route:ActivatedRouteSnapshot,state:RouterStateSnapshot): Observable<boolean | UrlTree>
| Promise<boolean | UrlTree>
| boolean
| UrlTree => {
  let user: Users |null = null;
  let returnValue:boolean = false;
  inject(UserServiceService).currentUser.subscribe(serviceUser => {
    console.log(`serviceUser: ${JSON.stringify(serviceUser)} returnvalue: ${returnValue}`);
    
    user = serviceUser;
    if (user && user.authenticated) {
      returnValue = true;
    }
  });
  if (returnValue) {
    return returnValue;
  } else {
    return inject(Router).createUrlTree(['/login']);
  }

}
