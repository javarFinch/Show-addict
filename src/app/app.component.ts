import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    // BrowserAnimationsModule,
    // BrowserModule,
    CarouselModule
   ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'show-binge';
  strings:String[] = ["Hi", "This","Is","In","a","Carousel!!!","How","Cool!!"];
}
