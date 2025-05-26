import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-about-cta',
  templateUrl: './about-cta.component.html',
  styleUrls: ['./about-cta.component.scss'],
})
export class AboutCtaComponent implements AfterViewInit {
  @ViewChild('container', { static: true }) container!: ElementRef;

  ngAfterViewInit(): void {
    const elements = this.container.nativeElement.querySelectorAll('.animate');

    gsap.from(elements, {
      opacity: 0,
      y: 60,
      duration: 1,
      stagger: 0.3,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: this.container.nativeElement,
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'restart none none reverse',
        markers: false, // set to true for debugging
      },
    });
  }
}
