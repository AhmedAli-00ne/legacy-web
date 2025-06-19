import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-properties-cta',
  templateUrl: './properties-cta.component.html',
  styleUrls: ['./properties-cta.component.scss'],
})
export class PropertiesCtaComponent implements AfterViewInit {
  @ViewChild('ctaSection', { static: true }) ctaSection!: ElementRef;
  @ViewChild('scrambleBtn1') btn1!: ElementRef;

  ngAfterViewInit(): void {
    this.initScramble(
      this.btn1.nativeElement.querySelector('span'),
      'Properties'
    );
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(
              this.ctaSection.nativeElement.querySelector('.cta-content'),
              {
                opacity: 1,
                y: 0,
                duration: 1.2,
                stagger: 0.3,
                ease: 'power3.out',
              }
            );
          } else {
            gsap.to(
              this.ctaSection.nativeElement.querySelector('.cta-content'),
              {
                opacity: 0,
                y: 50,
                duration: 1.2,
                stagger: 0.3,
                ease: 'power3.out',
              }
            );
          }
        });
      },
      {
        root: null,
        threshold: 1,
      }
    );

    observer.observe(this.ctaSection.nativeElement);
  }

  initScramble(el: HTMLElement, text: string) {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*';
    let interval: any;

    const scramble = () => {
      let iterations = 0;
      clearInterval(interval);

      interval = setInterval(() => {
        el.innerText = el.innerText
          .split('')
          .map((char, i) => {
            if (i < iterations) return text[i];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('');

        if (iterations >= text.length) clearInterval(interval);
        iterations += 1 / 2;
      }, 30);
    };

    el.parentElement?.addEventListener('mouseenter', scramble);
  }
}
