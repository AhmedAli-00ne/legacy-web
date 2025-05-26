import {
  Component,
  Renderer2,
  OnDestroy,
  AfterViewInit,
  HostListener,
  ElementRef,
  ViewChild,
} from '@angular/core';
import gsap from 'gsap';
import { CustomEase } from 'gsap/CustomEase';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterViewInit, OnDestroy {
  menuOpen = false;
  private clickListener: () => void;
  private firstSectionHeight = 0;
  private header!: HTMLElement;
  private animationTimeline!: gsap.core.Timeline;

  @ViewChild('sideMenu') sideMenu!: ElementRef;

  constructor(private renderer: Renderer2, private el: ElementRef) {
    this.clickListener = this.renderer.listen('document', 'click', () => {
      this.closeAllDropdowns();
    });
  }

  ngAfterViewInit(): void {
    this.header = this.el.nativeElement.querySelector('.header');
    this.initAnimations();

    const firstSection = document.querySelector('section:first-of-type');
    if (firstSection) {
      this.firstSectionHeight = firstSection.clientHeight;
    }

    if (this.sideMenu) {
      this.sideMenu.nativeElement.addEventListener(
        'transitionend',
        (event: TransitionEvent) => {
          if (this.menuOpen && event.propertyName === 'transform') {
            this.handleSideMenuTransitionEnd();
          }
        }
      );
    }
  }

  private initAnimations(): void {
    // Create custom easing curves
    CustomEase.create('logoReveal', 'M0,0 C0.4,0 0.2,1 1,1');
    CustomEase.create('menuSlide', 'M0,0 C0.1,0 0.2,1 1,1');

    // Initialize timeline
    this.animationTimeline = gsap.timeline({ paused: true });

    // Logo animation sequence
    this.animationTimeline
      .set(['.logo-icon', '.logo-text'], {
        opacity: 0,
        y: 40,
        rotationX: 15,
        transformOrigin: 'center center',
        transformStyle: 'preserve-3d',
      })
      .to(
        '.logo-icon',
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.8,
          ease: 'logoReveal',
        },
        0.1
      )
      .to(
        '.logo-text',
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.8,
          ease: 'logoReveal',
        },
        0.2
      )
      .to(
        ['.logo-icon', '.logo-text'],
        {
          scale: 1.05,
          duration: 0.2,
          repeat: 1,
          yoyo: true,
          ease: 'power1.inOut',
        },
        '+=0.3'
      );

    // Play animations after short delay
    setTimeout(() => this.animationTimeline.play(), 100);
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.updateHeaderClasses();
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;

    if (this.menuOpen) {
      this.openMenuAnimation();
    } else {
      this.closeMenuAnimation();
    }
  }

  private openMenuAnimation(): void {
    document.body.classList.add('menu-open');
    this.renderer.addClass(this.sideMenu.nativeElement, 'open');

    // Optional fallback
    setTimeout(() => {
      if (this.menuOpen) {
        this.handleSideMenuTransitionEnd();
      }
    }, 500);
  }

  private closeMenuAnimation(): void {
    const content =
      this.sideMenu.nativeElement.querySelector('.side-menu-content');

    // Immediately update header classes before animation starts
    this.renderer.removeClass(this.header, 'menu-opened');
    this.updateHeaderClasses();

    gsap.to(content, {
      opacity: 0,
      y: 20,
      duration: 0.3,
      ease: 'power1.in',
      onComplete: () => {
        document.body.classList.remove('menu-open');
        this.renderer.removeClass(this.sideMenu.nativeElement, 'open');
      },
    });
  }
  private handleSideMenuTransitionEnd(): void {
    if (this.menuOpen) {
      const content =
        this.sideMenu.nativeElement.querySelector('.side-menu-content');

      gsap.fromTo(
        content,
        {
          opacity: 0,
          y: 40,
          rotationX: 5,
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 0.6,
          ease: 'menuSlide',
          onStart: () => {
            this.renderer.addClass(this.header, 'menu-opened');
            this.renderer.addClass(this.header, 'scrolled');
          },
        }
      );
    }
  }

  private updateHeaderClasses(): void {
    const scrolledPastSection = window.pageYOffset >= this.firstSectionHeight;

    if (this.menuOpen) {
      this.renderer.addClass(this.header, 'menu-opened');
      this.renderer.addClass(this.header, 'scrolled');
    } else {
      this.renderer.removeClass(this.header, 'menu-opened');

      // Fixed conditional class handling
      if (scrolledPastSection) {
        this.renderer.addClass(this.header, 'scrolled');
      } else {
        this.renderer.removeClass(this.header, 'scrolled');
      }
    }
  }

  toggleDropdown(event: Event): void {
    event.stopPropagation();
    const target = event.currentTarget as HTMLElement;
    const allDropdowns = document.querySelectorAll('.has-dropdown.open');

    allDropdowns.forEach((el) => {
      if (el !== target) el.classList.remove('open');
    });

    target.classList.toggle('open');
  }

  closeAllDropdowns(): void {
    const dropdowns = document.querySelectorAll('.has-dropdown.open');
    dropdowns.forEach((el) => el.classList.remove('open'));
  }

  ngOnDestroy(): void {
    if (this.clickListener) this.clickListener();
    if (this.animationTimeline) this.animationTimeline.kill();
  }
}
