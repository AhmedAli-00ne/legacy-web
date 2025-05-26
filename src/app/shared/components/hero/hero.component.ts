import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  @ViewChild('logo1') logo1!: ElementRef;
  @ViewChild('logo2') logo2!: ElementRef;
  @ViewChild('bottomText') bottomText!: ElementRef;
  @ViewChild('topText') topText!: ElementRef;

  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.animateHeroStart();
  }
  animateHeroStart() {
    gsap.to(this.logo1.nativeElement, {
      duration: 2.5,
      ease: 'power1.out',
      y: 300,
    });
    gsap.to(this.logo2.nativeElement, {
      duration: 2.5,
      ease: 'power1.out',
      y: -300,
    });
    /*
    gsap.to(this.bottomText.nativeElement, {
      duration: 2.5,
      ease: 'power1.out',
      y: -300,
    });
    gsap.to(this.topText.nativeElement, {
      duration: 2.5,
      ease: 'power1.out',
      y: 300,
    });
    */
  }
}
