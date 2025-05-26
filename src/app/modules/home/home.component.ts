import {
  Component,
  ElementRef,
  QueryList,
  ViewChildren,
  AfterViewInit,
  HostListener,
} from '@angular/core';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { gsap } from 'gsap';
import { ChangeDetectorRef } from '@angular/core';

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
  @HostListener('window:wheel', ['$event'])
  @HostListener('window:touchmove', ['$event'])
  @HostListener('window:keydown', ['$event'])
  preventDefaultScroll(event: Event) {
    event.preventDefault(); // block default scroll
  }
  constructor(private cdr: ChangeDetectorRef) {}
  ngAfterViewInit(): void {
    this.sectionElements = this.sections.map((el) => el.nativeElement);
    this.scrollToSection(this.currentIndex);
  }

  @HostListener('wheel', ['$event'])
  onScroll(event: WheelEvent) {
    if (this.isScrolling) return;
    this.isScrolling = true;

    const delta = event.deltaY;
    if (delta > 0 && this.currentIndex < this.sectionElements.length - 1) {
      this.currentIndex++;
    } else if (delta < 0 && this.currentIndex > 0) {
      this.currentIndex--;
    }

    this.scrollToSection(this.currentIndex);

    setTimeout(() => (this.isScrolling = false), 800); // throttle scroll
  }

  scrollToSection(index: number) {
    const target = this.sectionElements[index];

    // Scroll using native smooth scroll
    target.scrollIntoView({ behavior: 'smooth' });

    // Refresh ScrollTrigger after scroll finishes (matches animation time)
    setTimeout(() => {
      // Run refresh twice to be safe
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
        setTimeout(() => ScrollTrigger.refresh(), 100); // second refresh to catch layout shifts
      });
    }, 800); // match scroll duration (e.g. 800ms)
  }
}
