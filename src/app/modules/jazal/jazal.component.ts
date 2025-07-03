import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { gsap } from 'gsap';
import { MorphSVGPlugin } from 'gsap/MorphSVGPlugin';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';

gsap.registerPlugin(MorphSVGPlugin, MotionPathPlugin);

@Component({
  selector: 'app-jazal',
  templateUrl: './jazal.component.html',
  styleUrls: ['./jazal.component.scss'],
})
export class JazalComponent implements AfterViewInit {
  currentFrame = 0;
  private flapInterval!: any;
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
      image: '../../../assets/images/R5.jpg',
      type: 'penthouses',
      floorPlans: [
        {
          name: 'Penthouse A',
          imageUrl: 'typeaplan.png',
        },
        {
          name: 'Penthouse B',
          imageUrl: 'typeaplan.png',
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
  constructor(private router: Router) {}

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
    }, 100); // ~10 FPS
  }

  animateBird() {
    const bird = document.querySelector('.bird-container');

gsap.to(bird, {
  duration: 10,
  repeat: -1,
  ease: "none",
  motionPath: {
    path: "M 3024 222 C 2982 291 2784 465 2262 465 C 1968 465 1752 375 1554 273 C 1398 189 1236 72 786 72 C 348 75 90 249 48 306 C 90 249 348 75 786 72 C 1236 72 1398 189 1554 273 C 1752 375 1968 465 2262 465 C 2784 465 2982 291 3024 222 Z",
    align: ".bird",
    alignOrigin: [0.5, 0.5],
  },
  onUpdate: function () {
        const progress = this['progress'](); // 👈 this returns 0–1
        if (progress < 0.5) {
          gsap.set(bird, { scaleX: 1 }); // Facing left
        } else {
          gsap.set(bird, { scaleX: -1 }); // Facing right (flipped)
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


}
