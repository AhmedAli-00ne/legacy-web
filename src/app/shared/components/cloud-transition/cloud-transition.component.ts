import { Component, Input, OnInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-cloud-transition',
  templateUrl: './cloud-transition.component.html',
  styleUrls: ['./cloud-transition.component.scss'],
})
export class CloudTransitionComponent {
  @Input() show = true;

  clouds = [
    '../../../../assets/images/cloud_1.png',
    '../../../../assets/images/cloud_2.png',
    '../../../../assets/images/cloud_3.png',
    '../../../../assets/images/cloud_4.png',
  ];

  ngAfterViewInit(): void {
    // Delay briefly to ensure DOM elements exist
    setTimeout(() => this.animateClouds(), 100);
  }

  animateClouds() {
    const tl = gsap.timeline({
      onComplete: () => {
        this.show = false;
      },
    });

    // Fade in clouds
    // tl.fromTo(
    //   '.cloud',
    //   { opacity: 0, scale: 0.8 },
    //   { opacity: 1, scale: 1, duration: 1, stagger: 0.2 }
    // );

    // Move clouds outward
    tl.to('.cloud-0', { x: '-100vw', duration: 1.5 }, 'reveal');
    tl.to('.cloud-1', { x: '100vw', duration: 1.5 }, 'reveal');
    tl.to('.cloud-2', { x: '-100vw', duration: 1.5 }, 'reveal');
    tl.to('.cloud-3', { x: '100vw', duration: 1.5 }, 'reveal');

    // Fade out overlay
    tl.to('.cloud-overlay', { opacity: 0, duration: 0.5 });
  }
}
