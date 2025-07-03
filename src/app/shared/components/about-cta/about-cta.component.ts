import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

//gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-about-cta',
  templateUrl: './about-cta.component.html',
  styleUrls: ['./about-cta.component.scss'],
})
export class AboutCtaComponent implements AfterViewInit {
  @ViewChild('container', { static: true }) container!: ElementRef;
  @ViewChild('scrambleBtn1') btn1!: ElementRef;
  @ViewChild('scrambleBtn2') btn2!: ElementRef;

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit2222');
    const elements = this.container.nativeElement.querySelectorAll('.animate');
    this.initScramble(
      this.btn1.nativeElement.querySelector('span'),
      'LEARN MORE'
    );
    this.initScramble(
      this.btn2.nativeElement.querySelector('span'),
      'DOWNLOAD COMPANY PROFILE'
    );
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.to(elements, {
              opacity: 1,
              y: 0,
              duration: 1,
              stagger: 0.3,
              ease: 'power3.out',
            });
          } else {
            gsap.to(elements, {
              opacity: 0,
              y: 60,
              duration: 1,
              stagger: 0.3,
              ease: 'power3.out',
            });
          }
        });
      },
      {
        root: null,
        threshold: 1,
      }
    );

    observer.observe(this.container.nativeElement);
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
