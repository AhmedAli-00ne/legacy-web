import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss']
})
export class PropertiesComponent implements AfterViewInit {

  constructor() { }

  ngAfterViewInit(): void {
    gsap.utils.toArray<HTMLElement>(".animate-text").forEach((el, index) => {
  gsap.from(el, {
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 1 + index * 0.2,
    ease: "power3.out"
  });
});

gsap.to(".title", {
  backgroundSize: "100% 100%",
  duration: 2,
  ease: "power2.out"
});


    this.initBlobAnimations();
    this.initBoxAnimations();

    // Content fade-in animation
    gsap.from(".properties-content", {
      opacity: 0,
      y: 50,
      duration: 1.5,
      delay: 0.8,
      ease: "power3.out"
    });

    // Optional: fade in blobs and boxes
    gsap.from(".blob", {
      opacity: 0,
      duration: 2,
      stagger: 0.3,
      ease: "power2.out"
    });

    gsap.from(".animated-box", {
      opacity: 0,
      duration: 2,
      stagger: 0.5,
      ease: "power2.out"
    });
  }

  private initBlobAnimations(): void {
    const blobs = gsap.utils.toArray<HTMLElement>(".blob");

    blobs.forEach((blob: HTMLElement) => {
      gsap.set(blob, {
        x: gsap.utils.random(-100, 100),
        y: gsap.utils.random(-80, 80),
        scale: gsap.utils.random(0.8, 1.2),
        rotation: gsap.utils.random(-45, 45)
      });

      const tl = gsap.timeline({ repeat: -1, yoyo: true });

      tl.to(blob, {
        x: `+=${gsap.utils.random(-80, 80)}`,
        y: `+=${gsap.utils.random(-60, 60)}`,
        scale: gsap.utils.random(0.9, 1.3),
        rotation: gsap.utils.random(-90, 90),
        duration: gsap.utils.random(6, 12),
        ease: "sine.inOut"
      }).to(blob, {
        x: `+=${gsap.utils.random(-80, 80)}`,
        y: `+=${gsap.utils.random(-60, 60)}`,
        scale: gsap.utils.random(0.9, 1.3),
        rotation: gsap.utils.random(-90, 90),
        duration: gsap.utils.random(6, 12),
        ease: "sine.inOut"
      });
    });
  }

  private initBoxAnimations(): void {
    const boxes = gsap.utils.toArray<HTMLElement>(".animated-box");

    boxes.forEach((box: HTMLElement, index: number) => {
      gsap.set(box, {
        x: gsap.utils.random(-window.innerWidth / 3, window.innerWidth / 3),
        y: gsap.utils.random(-window.innerHeight / 3, window.innerHeight / 3),
        z: gsap.utils.random(-500, 500),
        scale: gsap.utils.random(0.6, 1.0),
        rotationX: gsap.utils.random(0, 360),
        rotationY: gsap.utils.random(0, 360),
        rotationZ: gsap.utils.random(0, 360),
        opacity: gsap.utils.random(0.05, 0.2)
      });

      const tl = gsap.timeline({ repeat: -1, yoyo: true, delay: index * 0.5 });

      tl.to(box, {
        x: gsap.utils.random(-window.innerWidth / 4, window.innerWidth / 4),
        y: gsap.utils.random(-window.innerHeight / 4, window.innerHeight / 4),
        z: gsap.utils.random(-400, 400),
        rotationX: gsap.utils.random(-180, 180),
        rotationY: gsap.utils.random(-180, 180),
        rotationZ: gsap.utils.random(-180, 180),
        scale: gsap.utils.random(0.7, 1.1),
        opacity: gsap.utils.random(0.05, 0.25),
        duration: gsap.utils.random(12, 20),
        ease: "sine.inOut"
      }).to(box, {
        x: gsap.utils.random(-window.innerWidth / 4, window.innerWidth / 4),
        y: gsap.utils.random(-window.innerHeight / 4, window.innerHeight / 4),
        z: gsap.utils.random(-400, 400),
        rotationX: gsap.utils.random(-180, 180),
        rotationY: gsap.utils.random(-180, 180),
        rotationZ: gsap.utils.random(-180, 180),
        scale: gsap.utils.random(0.6, 1.0),
        opacity: gsap.utils.random(0.05, 0.25),
        duration: gsap.utils.random(12, 20),
        ease: "sine.inOut"
      });
    });



  }
}
