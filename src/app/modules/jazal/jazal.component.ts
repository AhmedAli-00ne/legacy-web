import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jazal',
  templateUrl: './jazal.component.html',
  styleUrls: ['./jazal.component.scss'],
})
export class JazalComponent {
  properties = [
    {
      name: 'Rosée Apartments',
      description:
        'Spacious apartments with premium finishes and breathtaking views. Click to view floor plans.',
      image: 'prop.png',
      type: 'luxury-apartments',
      floorPlans: [
        {
          name: 'Ground Floor',
          imageUrl: '../../../assets/images/groundplan.png',
        },
        {
          name: 'Type A',
          imageUrl: '../../../assets/images/typeaplan.png',
        },
        {
          name: 'Type B',
          imageUrl: '../../../assets/images/typeaplan.png',
        },
      ],
    },
    {
      name: 'Siléne Apartments',
      description:
        'Exclusive penthouses offering the ultimate in luxury and privacy. Click to view floor plans.',
      image: 'prop.png',
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

  showModal = false;
  selectedFloorPlans: any;
  constructor(private router: Router) {}

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
