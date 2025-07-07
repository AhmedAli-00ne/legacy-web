import {
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
  AfterViewInit,
  HostListener,
} from '@angular/core';
import Swiper from 'swiper';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { gsap } from 'gsap';

gsap.registerPlugin(ScrollToPlugin);

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit {
  @ViewChildren('sections') sections!: QueryList<ElementRef>;
  private sectionElements: HTMLElement[] = [];
  private currentIndex = 0;
  private isScrolling = false;
  isMobile = window.innerWidth <= 768;

  ngAfterViewInit(): void {
    if (!this.isMobile) {
      this.sectionElements = this.sections.map((el) => el.nativeElement);
      this.scrollToSection(this.currentIndex);
    } else {
      setTimeout(() => {
        new Swiper('.mobile-swiper', {
          direction: 'vertical',
          slidesPerView: 1,
          mousewheel: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        });
      }, 0);
    }
  }

  @HostListener('window:resize')
  onResize() {
    this.isMobile = window.innerWidth <= 768;
  }

  @HostListener('wheel', ['$event'])
  onScroll(event: WheelEvent) {
    if (this.isMobile || this.isScrolling) return;

    const delta = event.deltaY;
    this.isScrolling = true;

    if (delta > 0 && this.currentIndex < this.sectionElements.length - 1) {
      this.currentIndex++;
    } else if (delta < 0 && this.currentIndex > 0) {
      this.currentIndex--;
    }

    this.scrollToSection(this.currentIndex);
    setTimeout(() => (this.isScrolling = false), 800);
  }

  scrollToSection(index: number) {
    const target = this.sectionElements[index];
    target.scrollIntoView({ behavior: 'smooth' });
  }
}
