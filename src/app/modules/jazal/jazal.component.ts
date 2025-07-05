import {
  AfterViewInit,
  Component,
  ElementRef,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { Router } from '@angular/router';
import { gsap } from 'gsap';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import {
  MainGalleryItem,
  MAIN_GALLERY_ITEMS,
} from 'src/app/shared/data/renders-data';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';

Swiper.use([Navigation]);

gsap.registerPlugin(MorphSVGPlugin, MotionPathPlugin);

@Component({
  selector: 'app-jazal',
  templateUrl: './jazal.component.html',
  styleUrls: ['./jazal.component.scss'],
})
export class JazalComponent implements AfterViewInit {
  currentFrame = 0;
  private flapInterval!: any;
  previewItems: MainGalleryItem[] = MAIN_GALLERY_ITEMS;
  properties = [
    {
      name: 'Rosée Apartments',
      description:
        'Spacious apartments with premium finishes and breathtaking views. Click to view floor plans.',
      image: 'assets/images/RoseeApartments/Cover.jpg',
      type: 'luxury-apartments',
      floorPlans: [
        {
          name: 'Ground Floor',
          imageUrl: 'RoseeApartments/GroundFloor.png',
          types: [
            {
              name: 'Type A',
              imageUrl: 'RoseeApartments/TypeA.png',
            },
            {
              name: 'Type B',
              imageUrl: 'RoseeApartments/TypeB.png',
            },
            {
              name: 'Type C',
              imageUrl: 'RoseeApartments/TypeC.png',
            },
          ],
        },
        {
          name: 'Typical Floor',
          imageUrl: 'RoseeApartments/TypicalFloor.png',
          types: [
            {
              name: 'Type D',
              imageUrl: 'RoseeApartments/TypeD.png',
            },
            {
              name: 'Type E',
              imageUrl: 'RoseeApartments/TypeE.png',
            },
          ],
        },
      ],
    },
    {
      name: 'Siléne Apartments',
      description:
        'Exclusive penthouses offering the ultimate in luxury and privacy. Click to view floor plans.',
      image: 'assets/images/SileneApartments/Cover.png',
      floorPlans: [
        {
          name: 'Ground Floor',
          imageUrl: 'SileneApartments/GroundFloor.png',
          types: [
            {
              name: 'Type A',
              imageUrl: 'SileneApartments/TypeA.png',
            },
            {
              name: 'Type B',
              imageUrl: 'SileneApartments/TypeB.png',
            },
            {
              name: 'Type C',
              imageUrl: 'SileneApartments/TypeC.png',
            },
            {
              name: 'Type D',
              imageUrl: 'SileneApartments/TypeD.png',
            },
            {
              name: 'Type E',
              imageUrl: 'SileneApartments/TypeE.png',
            },
          ],
        },
        {
          name: 'Typical Floor',
          imageUrl: 'SileneApartments/TypicalFloor.png',
          types: [
            {
              name: 'Type F',
              imageUrl: 'SileneApartments/TypeF.png',
            },
            {
              name: 'Type G',
              imageUrl: 'SileneApartments/TypeG.png',
            },
            {
              name: 'Type H',
              imageUrl: 'SileneApartments/TypeH.png',
            },
            {
              name: 'Type I',
              imageUrl: 'SileneApartments/TypeI.png',
            },
          ],
        },
      ],
    },
  ];
  showClouds = true;
  @ViewChild('overlay1') overlay1!: ElementRef;
  @ViewChild('overlay2') overlay2!: ElementRef;
  @ViewChild('scrambleBtn1') btn1!: ElementRef;

  @ViewChild('overlayContainer', { static: true })
  overlayContainer!: ElementRef;
  showOverlay = true;
  showModal = false;
  selectedFloorPlans: any;
  constructor(private router: Router, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const tl = gsap.timeline({
      onComplete: () => {
        this.showOverlay = false;
      },
    });
    tl.to(this.overlay1.nativeElement, {
      duration: 1,
      x: -1000,
      ease: 'power2.out',
    });
    tl.to(this.overlay2.nativeElement, {
      duration: 1,
      x: 1000,
      ease: 'power2.out',
    });

    this.initScramble(
      this.btn1.nativeElement.querySelector('span'),
      'DOWNLOAD BROCHURE'
    );

    this.startFlapping();
    this.animateBird();
    this.initSwiper();
  }

  openModal(floorPlans: any) {
    this.selectedFloorPlans = floorPlans;
    this.showModal = true;
    console.log('here');
  }

  closeModal() {
    this.showModal = false;
  }
  goTo360Tour() {
    window.open('https://legacy-estates.co/360tour.html', '_blank');
  }
  startFlapping() {
    this.flapInterval = setInterval(() => {
      this.currentFrame = (this.currentFrame + 1) % 3;
    }, 60); // ~10 FPS
  }

  animateBird() {
  const container = document.querySelector('.bird-container') as HTMLElement;
  if (!container) return;

  let lastX = 0;
  let lastY = 0;

  gsap.to(container, {
    duration: 15,
    repeat: -1,
    ease: 'none',
    motionPath: {
      path: 'M 3024 222 C 2982 291 2784 465 2262 465 C 1968 465 1752 375 1554 273 C 1398 189 1236 72 786 72 C 348 75 90 249 48 306 C 90 249 348 75 786 72 C 1236 72 1398 189 1554 273 C 1752 375 1968 465 2262 465 C 2784 465 2982 291 3024 222 Z',
      align: '.bird',
      alignOrigin: [0.5, 0.5],
    },
    onUpdate: function () {
      const bounds = container.getBoundingClientRect();
      const centerX = bounds.left + bounds.width / 2;
      const centerY = bounds.top + bounds.height / 2;

      const dx = centerX - lastX;
      const dy = centerY - lastY;

      lastX = centerX;
      lastY = centerY;

      // Calculate angle in degrees
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);

      // Set rotation only (no scaleX flip)
      gsap.set(container, {
        rotation: angle,
      });
      const progress = this['progress'](); // 👈 this returns 0–1
        if (progress < 0.5) {
          gsap.set(container, { scaleY: 1 }); // Facing left
        } else {
          gsap.set(container, { scaleY: -1 }); // Facing right (flipped)
        }
    },
  });
}




  ngOnDestroy(): void {
    clearInterval(this.flapInterval);
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


  initSwiper() {
    new Swiper('.mySwiper', {
      slidesPerView: 'auto',
      spaceBetween: 16,
      freeMode: true,
      grabCursor: true,
      watchSlidesProgress: true,
      mousewheel: true, // enable scroll on desktop with mouse
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        0: {
          slidesPerView: 1.1,
          spaceBetween: 8,
        },
        480: {
          slidesPerView: 1.5,
          spaceBetween: 12,
        },
        768: {
          slidesPerView: 2.2,
          spaceBetween: 14,
        },
        1024: {
          slidesPerView: 3.5,
          spaceBetween: 16,
        },
        1300: {
          slidesPerView: 'auto',
          spaceBetween: 18,
        },
      },
      on: {
        progress: function (this: Swiper) {
          this.slides.forEach((slideEl: any) => {
            const slideProgress = slideEl.progress;
            const scale = 1 - Math.min(Math.abs(slideProgress * 0.1), 0.15);
            const opacity = 1 - Math.min(Math.abs(slideProgress * 0.5), 0.5);
            const content = slideEl.querySelector(
              '.swiper-material-content'
            ) as HTMLElement;
            if (content) {
              content.style.transform = `scale(${scale})`;
              content.style.opacity = opacity.toString();
            }
          });
        },
        setTransition: function (this: Swiper, duration) {
          this.slides.forEach((slide) => {
            slide.style.transition = duration + 'ms';
          });
        },
      },
    });
  }
}
