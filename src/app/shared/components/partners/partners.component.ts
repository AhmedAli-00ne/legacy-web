import {
  Component,
  AfterViewInit,
  QueryList,
  ViewChildren,
  ElementRef,
  ViewChild,
} from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss'],
})
export class PartnersComponent implements AfterViewInit {
  @ViewChildren('partnerCard') partnerCards!: QueryList<ElementRef>;
  @ViewChild('scrambleBtn1') btn1!: ElementRef;
  partners = [
    { name: 'NAC', logo: '../../../../assets/images/dummys.avif' },
    { name: 'GEN Egypt', logo: '../../../../assets/images/dummys.avif' },
    { name: 'Kerten', logo: '../../../../assets/images/dummys.avif' },
    { name: 'GEN Bloomfields', logo: '../../../../assets/images/dummys.avif' },
  ];

  ngAfterViewInit(): void {
    this.partnerCards.forEach((card, i) => {
      const el = card.nativeElement;

      // // Scroll pop-up animation
      // gsap.from(el, {
      //   opacity: 0,
      //   scale: 0.7,
      //   duration: 0.6,
      //   delay: i * 0.2,
      //   scrollTrigger: {
      //     trigger: el,
      //     start: 'top 80%',
      //   },
      // });

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Animate in
              gsap.to(entry.target, {
                opacity: 1,
                scale: 1,
                duration: 0.6,
                delay: i * 0.2,
              });
            } else {
              // Animate out
              gsap.to(entry.target, {
                opacity: 0,
                scale: 0,
                duration: 0.8,
                delay: i * 0.2,
              });
            }
          });
        },
        {
          root: null,
          threshold: 0.5, // 0.5 means 50% visible triggers animation
        }
      );

      observer.observe(el);

      // Hover effect
      el.addEventListener('mouseenter', () => {
        gsap.to(el, {
          scale: 1.08,
          rotateX: 5,
          rotateY: -5,
          boxShadow: '0 15px 25px rgba(247, 189, 65, 0.32)',
          duration: 0.3,
          ease: 'power2.out',
        });
      });

      el.addEventListener('mouseleave', () => {
        gsap.to(el, {
          scale: 1,
          rotateX: 0,
          rotateY: 0,
          boxShadow: '0 0 15px rgba(255, 255, 255, 0.5)',
          duration: 0.4,
          ease: 'power2.inOut',
        });
      });
    });
    // scramble button
    this.initScramble(
      this.btn1.nativeElement.querySelector('span'),
      'LEARN MORE'
    );
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
