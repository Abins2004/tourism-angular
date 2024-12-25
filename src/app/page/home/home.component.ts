import { Component } from '@angular/core';
import { NavbarComponent } from "../../ui/navbar/navbar.component";
import { CarouselComponent } from "../../ui/carousel/carousel.component";
import { NgFor } from '@angular/common';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [NavbarComponent, CarouselComponent,CarouselModule,NgFor,RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 2
      },
      940: {
        items: 3
      }
    },
    nav: true,               // Enables next/prev navigation buttons
  autoplay: true,          // Enables autoplay
  autoplayTimeout: 3000,   // Time in milliseconds between each slide change
  autoplayHoverPause: true // Pauses autoplay when hovering over the carousel
  }
  slides = [
    {
        id: 1,
        src: "https://images.unsplash.com/photo-1519955266818-0231b63402bc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGluZGlhfGVufDB8fDB8fHww",
        alt: "Image 1",
        href: "https://example.com/page1"  // Link for this image
    },
    {
        id: 2,
        src: "https://images.unsplash.com/photo-1490707843862-104c1ead1918?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Image 2",
        href: "https://example.com/page2"  // Link for this image
    },
    {
        id: 3,
        src: "https://images.unsplash.com/photo-1506461883276-594a12b11cf3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Image 3",
        href: "https://example.com/page3"  // Link for this image
    },
    {
        id: 4,
        src: "https://plus.unsplash.com/premium_photo-1661963083312-8adde31d9900?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "Image 4",
        href: "https://example.com/page4"  // Link for this image
    }
];



}
