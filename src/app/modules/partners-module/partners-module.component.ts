import {
  Component,
  AfterViewInit,
  ElementRef,
  QueryList,
  ViewChildren,
} from '@angular/core';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
@Component({
  selector: 'app-partners-module',
  templateUrl: './partners-module.component.html',
  styleUrls: ['./partners-module.component.scss']
})
export class PartnersModuleComponent implements AfterViewInit{
  @ViewChildren('card') partnerCards!: QueryList<ElementRef>;

  partners = [
    { name: 'Partner 1', logo: '../../../assets/images/Lorem-Ipsum-alternatives-768x492.png' },
    { name: 'Partner 2', logo: '../../../assets/images/Lorem-Ipsum-alternatives-768x492.png' },
    { name: 'Partner 3', logo: '../../../assets/images/Lorem-Ipsum-alternatives-768x492.png' },
    { name: 'Partner 4', logo: '../../../assets/images/Lorem-Ipsum-alternatives-768x492.png' },
    { name: 'Partner 5', logo: '../../../assets/images/Lorem-Ipsum-alternatives-768x492.png' },
    { name: 'Partner 6', logo: '../../../assets/images/Lorem-Ipsum-alternatives-768x492.png' },
    { name: 'Partner 7', logo: '../../../assets/images/Lorem-Ipsum-alternatives-768x492.png' },
    { name: 'Partner 8', logo: '../../../assets/images/Lorem-Ipsum-alternatives-768x492.png' },
    { name: 'Partner 9', logo: '../../../assets/images/Lorem-Ipsum-alternatives-768x492.png' },
  ];

  ngAfterViewInit(): void {
    this.partnerCards.forEach((card, i) => {
      const el = card.nativeElement;

      gsap.to(el, {
        opacity: 1,
        scale: 1,
        duration: 0.6,
        delay: i * 0.1,
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      });
    });

    const cards = document.querySelectorAll('.partner-card');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  });

  cards.forEach(card => observer.observe(card));
  }
}
