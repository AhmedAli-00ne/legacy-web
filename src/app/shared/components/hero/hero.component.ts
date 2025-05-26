import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent {
  @ViewChild('heroTop') heroTop!: ElementRef;
  @ViewChild('heroBottom') heroBottom!: ElementRef;
  constructor() {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.animateHeroStart();
  }
  animateHeroStart() {
    gsap.to(this.heroTop.nativeElement, {
      duration: 2.5,
      ease: 'power1.out',
      x: -500,
    });
    gsap.to(this.heroBottom.nativeElement, {
      duration: 2.5,
      ease: 'power1.out',
      x: 500,
    });
  }
  animateHeroEnd() {
    gsap.to(this.heroTop.nativeElement, {
      duration: 2.5,
      ease: 'power1.out',
      x: 500,
    });
    gsap.to(this.heroBottom.nativeElement, {
      duration: 2.5,
      ease: 'power1.out',
      x: -500,
    });
  }
}
