import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements AfterViewInit {
  services = [
    {
      title: 'Property Consultation',
      icon: '../../../../assets/icons/consultation.svg',
      description:
        'Tailored property guidance based on lifestyle, location, and investment goals.',
    },
    {
      title: 'Investment Advisory',
      icon: 'assets/icons/investment.svg',
      description:
        'Expert advice on profitable real estate investment opportunities.',
    },
    {
      title: 'Project Management',
      icon: 'assets/icons/consultation.svg',
      description: 'Full-service oversight from design to delivery.',
    },
    {
      title: 'Lifestyle Enhancements',
      icon: 'assets/icons/consultation.svg',
      description:
        'Creating vibrant, livable communities with meaningful amenities.',
    },
  ];
  @ViewChild('dividerLine') dividerLine!: ElementRef;
  @ViewChild('scrambleBtn1') btn1!: ElementRef;
  @ViewChildren('container', { read: ElementRef })
  cards!: QueryList<ElementRef>;
  private hasAnimated = false;
  ngAfterViewInit(): void {
    const divider = this.dividerLine.nativeElement;
    const cardEls = this.cards.map((card) => card.nativeElement);
    this.initScramble(
      this.btn1.nativeElement.querySelector('span'),
      'LEARN MORE'
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.hasAnimated) {
            this.hasAnimated = true;

            // Rotate line
            gsap.to(divider, {
              rotate: 180,
              duration: 1.2,
              ease: 'power2.out',
            });

            // Reveal cards after slight delay
            gsap.to(cardEls, {
              opacity: 1,
              y: 0,
              duration: 0.6,
              stagger: 0.2,
              ease: 'power2.out',
              delay: 0.1,
            });
          }

          if (!entry.isIntersecting && this.hasAnimated) {
            // Optional: reverse animation if you scroll out
            this.hasAnimated = false;

            gsap.to(divider, {
              rotate: 0,
              duration: 1,
              ease: 'power2.out',
            });

            gsap.set(cardEls, {
              opacity: 0,
              y: 20,
            });
          }
        });
      },
      {
        root: null,
        threshold: 1, // trigger when most of the divider is visible
      }
    );

    observer.observe(this.dividerLine.nativeElement);
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
