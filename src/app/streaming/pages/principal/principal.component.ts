import { NgOptimizedImage } from '@angular/common';
import {
  AfterViewInit,
  Component,
  CUSTOM_ELEMENTS_SCHEMA,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { SwiperOptions } from 'swiper/types';

@Component({
  selector: 'app-principal',
  standalone: true,
  imports: [NgOptimizedImage, MatButtonModule, MatIconModule, RouterModule],
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PrincipalComponent implements AfterViewInit {
  public images = [
    './Star+_logo.svg',
    './Disney+_logo.svg',
    './Netflix_2015_logo.svg',
    './Crunchyroll_Logo.svg',
    './Amazon_Prime_Video_logo.svg',
    './Max_logo.svg',
    './Paramount_Pictures_Corporation_logo.svg',
    './Spotify_logo.svg',
    './iptv_logo.webp',
  ];

  constructor() {}

  ngAfterViewInit(): void {
    const swiperEl = document.querySelector('swiper-container');
    const swiperOptions: SwiperOptions = {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 10,
      effect: 'coverflow',
      pagination: {
        enabled: false,
      },
      loop: true,
      grabCursor: true,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: false,
      },
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 50,
        },
      },
    };

    Object.assign(swiperEl!, swiperOptions);
    swiperEl!.initialize();
  }
}
