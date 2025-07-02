import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { gsap } from 'gsap';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss'],
})
export class PropertiesComponent {
  countries = ['Egypt', 'USA'];
  cities = ['Cairo', 'New York','Giza'];
  projects = ['Jazal', 'The Metropolitan Lofts'];
  propertyTypes = ['Apartment', 'Villa', 'Condo'];

  selectedCountry = '';
  selectedCity = '';
  selectedProject = '';
  selectedType = '';

  properties = [
    {
      name: 'Rosée Apartments',
      location: 'Sheikh Zayed',
      image: 'assets/images/RoseeApartments/Cover.jpg',
      country: 'Egypt',
      city: 'Giza',
      project: 'Jazal',
      type: 'Apartment',
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
      location: 'Sheikh Zayed',
      image: '../../../assets/images/R5.jpg',
      country: 'Egypt',
      city: 'Giza',
      project: 'Jazal',
      type: 'Apartment',
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
    
  ];

  currentPage = 1;
  pageSize = 6;

  get filteredProperties() {
    let result = this.properties;

    if (this.selectedCountry)
      result = result.filter((p) => p.country === this.selectedCountry);
    if (this.selectedCity)
      result = result.filter((p) => p.city === this.selectedCity);
    if (this.selectedProject)
      result = result.filter((p) => p.project === this.selectedProject);
    if (this.selectedType)
      result = result.filter((p) => p.type === this.selectedType);

    const start = (this.currentPage - 1) * this.pageSize;
    return result.slice(start, start + this.pageSize);
  }

  get totalPages() {
    let result = this.properties;

    if (this.selectedCountry)
      result = result.filter((p) => p.country === this.selectedCountry);
    if (this.selectedCity)
      result = result.filter((p) => p.city === this.selectedCity);
    if (this.selectedProject)
      result = result.filter((p) => p.project === this.selectedProject);
    if (this.selectedType)
      result = result.filter((p) => p.type === this.selectedType);

    return Math.ceil(result.length / this.pageSize);
  }

  get totalPagesArray() {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  goToPage(page: number) {
    this.currentPage = page;
  }

  prevPage() {
    if (this.currentPage > 1) this.currentPage--;
  }

  nextPage() {
    if (this.currentPage < this.totalPages) this.currentPage++;
  }

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





