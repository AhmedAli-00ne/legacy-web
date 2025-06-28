import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';
import { gsap } from 'gsap';

gsap.registerPlugin(MorphSVGPlugin);

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
})
export class HeroComponent implements AfterViewInit {
  @ViewChild('logo1') logo1!: ElementRef;
  @ViewChild('logo2') logo2!: ElementRef;
  @ViewChild('tagline') tagline!: ElementRef;
  @ViewChild('hero') container!: ElementRef;
  @ViewChild('topText') topText!: ElementRef;
  @ViewChild('bottomText') bottomText!: ElementRef;
  @ViewChild('Buttons') buttons!: ElementRef;

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            observer.unobserve(this.container.nativeElement); // run once

            const tl = gsap.timeline();

            // ✅ Animate logo1 from -30% to 0%
            tl.fromTo(
              this.logo1.nativeElement,
              { y: '-30%', opacity: 0 },
              { y: '0%', opacity: 1, duration: 1.5, ease: 'power2.out' }
            )

              // ✅ Animate logo2 from 30% to 0%
              .fromTo(
                this.logo2.nativeElement,
                { y: '30%', opacity: 0 },
                { y: '0%', opacity: 1, duration: 1.5, ease: 'power2.out' },
                '-=1.2' // overlap slightly with logo1
              )

              // ✅ Reveal paragraph (tagline) from left to right
              .to(
                this.tagline.nativeElement,
                {
                  opacity: 1,
                  clipPath: 'inset(0 0% 0 0)',
                  duration: 1.2,
                  ease: 'power2.out',
                },
                '+=0.2'
              ); // small delay after logos
          }
        });
      },
      {
        threshold: 1,
      }
    );

    observer.observe(this.container.nativeElement);
  }

  openJazal() {
    console.log('Jazal opened');
    MorphSVGPlugin.convertToPath('#bar');
    gsap.to('#bar', { duration: 3, morphSVG: '#bird' });
    gsap.to(this.logo2.nativeElement, {
      duration: 1,
      opacity: 0,
      y: '30%',
      ease: 'power2.out',
    });
    gsap.to(this.tagline.nativeElement, {
      duration: 1,
      opacity: 0,
      clipPath: 'inset(0 100% 0 0)',
      ease: 'power2.out',
    });
    gsap.to(this.topText.nativeElement, {
      duration: 1,
      opacity: 0,
      y: '30%',
      ease: 'power2.out',
    });
    gsap.to(this.bottomText.nativeElement, {
      duration: 1,
      opacity: 0,
      y: '30%',
      ease: 'power2.out',
    });
    gsap.to(this.buttons.nativeElement, {
      duration: 1,
      opacity: 0,
      y: '30%',
      ease: 'power2.out',
    });
    setTimeout(() => {
      const tl = gsap.timeline();
      tl.to(this.logo1.nativeElement, {
        duration: 2,
        scale: 50,
        x: '800%',
        y: '700%',
        ease: 'power2.inOut',
      }).to(
        this.container.nativeElement,
        {
          duration: 1,
          opacity: 0,
          y: '30%',
          ease: 'power2.out',
          onComplete: () => {
            // Navigate to Jazal page after animation completes
            window.location.href = '/jazal';
          },
        },
        '-=0.5'
      );
    }, 1000);
  }
}
