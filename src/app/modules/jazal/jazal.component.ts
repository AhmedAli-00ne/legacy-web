import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { gsap } from 'gsap';

@Component({
  selector: 'app-jazal',
  templateUrl: './jazal.component.html',
  styleUrls: ['./jazal.component.scss'],
})
export class JazalComponent implements AfterViewInit {
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
}
