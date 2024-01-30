import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';
import { Users } from '../Users';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule, Location } from '@angular/common';

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
  user:Users={id:0,username:'',password:''}
  showUser:boolean=false
  UserUrl:string = "http://localhost:8080/users/findUser"
  constructor(private http:HttpClient, private route:ActivatedRoute, private location:Location) { 
  }
  ngOnInit() {
    const username = this.route.snapshot.queryParamMap.get('user');
    console.log(`username:${username}`);
    if (username) {
    this.http.get<Users>(this.UserUrl,{headers: new HttpHeaders({"username":username})}).subscribe(
      user => {
        this.user = user;
        this.showUser=true
      }
    )
    }
  }
}
