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
    this.sectionElements[index]?.scrollIntoView({
      behavior: 'smooth',
    });
  }
}
