import { Component, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.scss'],
})
export class PropertiesComponent {
  countries = ['Egypt', 'USA'];
  cities = ['Cairo', 'New York'];
  projects = ['Jazal', 'The Metropolitan Lofts'];
  propertyTypes = ['Apartment', 'Villa', 'Condo'];

  selectedCountry = '';
  selectedCity = '';
  selectedProject = '';
  selectedType = '';

  properties = [
    {
      name: 'The Grand Residences',
      location: 'New York, NY',
      image: '../../../assets/images/news2.jpg',
      country: 'USA',
      city: 'New York',
      project: 'The Grand Residences',
      type: 'Apartment',
      floorPlans: [
        { name: 'Ground Floor', imageUrl: '../../../assets/images/news2.jpg' },
        { name: 'Unit A', imageUrl: '../../../assets/images/news2.jpg' },
      ],
    },
    {
      name: 'The Metropolitan Lofts',
      location: 'New York, NY',
      image: '../../../assets/images/news2.jpg',
      country: 'USA',
      city: 'New York',
      project: 'The Metropolitan Lofts',
      type: 'Apartment',
      floorPlans: [
        { name: 'Loft Level', imageUrl: '../../../assets/images/news2.jpg' },
        {
          name: 'Penthouse View',
          imageUrl: '../../../assets/images/news2.jpg',
        },
      ],
    },
    {
      name: 'The Skyline Apartments',
      location: 'New York, NY',
      image: '../../../assets/images/news2.jpg',
      country: 'USA',
      city: 'New York',
      project: 'The Skyline Apartments',
      type: 'Condo',
      floorPlans: [
        { name: 'Skyview A', imageUrl: '../../../assets/images/news2.jpg' },
        { name: 'Skyview B', imageUrl: '../../../assets/images/news2.jpg' },
      ],
    },
    {
      name: 'The Central Park Estates',
      location: 'New York, NY',
      image: '../../../assets/images/news2.jpg',
      country: 'USA',
      city: 'New York',
      project: 'The Central Park Estates',
      type: 'Apartment',
      floorPlans: [
        { name: 'Park View', imageUrl: '../../../assets/images/news2.jpg' },
        { name: 'Penthouse', imageUrl: '../../../assets/images/news2.jpg' },
      ],
    },
    {
      name: 'The Riverside Villas',
      location: 'New York, NY',
      image: '../../../assets/images/news2.jpg',
      country: 'USA',
      city: 'New York',
      project: 'The Riverside Villas',
      type: 'Villa',
      floorPlans: [
        { name: 'Villa A', imageUrl: '../../../assets/images/news2.jpg' },
        { name: 'Villa B', imageUrl: '../../../assets/images/news2.jpg' },
      ],
    },
    {
      name: 'The Downtown Condos',
      location: 'New York, NY',
      image: '../../../assets/images/news2.jpg',
      country: 'USA',
      city: 'New York',
      project: 'The Downtown Condos',
      type: 'Condo',
      floorPlans: [
        { name: 'Downtown A', imageUrl: '../../../assets/images/news2.jpg' },
        { name: 'Downtown B', imageUrl: '../../../assets/images/news2.jpg' },
      ],
    },
    {
      name: 'Palm Grove Estates',
      location: 'Cairo, Egypt',
      image: '../../../assets/images/news2.jpg',
      country: 'Egypt',
      city: 'Cairo',
      project: 'Palm Grove Estates',
      type: 'Villa',
      floorPlans: [
        { name: 'Main Floor', imageUrl: '../../../assets/images/news2.jpg' },
        { name: 'Garden View', imageUrl: '../../../assets/images/news2.jpg' },
      ],
    },
    {
      name: 'Jazal Residences',
      location: 'Cairo, Egypt',
      image: '../../../assets/images/news2.jpg',
      country: 'Egypt',
      city: 'Cairo',
      project: 'Jazal',
      type: 'Apartment',
      floorPlans: [
        { name: 'Standard', imageUrl: '../../../assets/images/news2.jpg' },
        { name: 'Deluxe', imageUrl: '../../../assets/images/news2.jpg' },
      ],
    },
    {
      name: 'Giza Heights',
      location: 'Giza, Egypt',
      image: '../../../assets/images/news2.jpg',
      country: 'Egypt',
      city: 'Giza',
      project: 'Giza Heights',
      type: 'Apartment',
      floorPlans: [
        { name: 'Type 1', imageUrl: '../../../assets/images/news2.jpg' },
        { name: 'Type 2', imageUrl: '../../../assets/images/news2.jpg' },
      ],
    },
    {
      name: 'Nile River View Condos',
      location: 'Cairo, Egypt',
      image: '../../../assets/images/news2.jpg',
      country: 'Egypt',
      city: 'Cairo',
      project: 'Nile River View',
      type: 'Condo',
      floorPlans: [
        { name: 'Nile A', imageUrl: '../../../assets/images/news2.jpg' },
        { name: 'Nile B', imageUrl: '../../../assets/images/news2.jpg' },
      ],
    },
    {
      name: 'The Oasis Villas',
      location: 'Cairo, Egypt',
      image: '../../../assets/images/news2.jpg',
      country: 'Egypt',
      city: 'Cairo',
      project: 'The Oasis',
      type: 'Villa',
      floorPlans: [
        { name: 'Oasis Classic', imageUrl: '../../../assets/images/news2.jpg' },
        { name: 'Oasis Elite', imageUrl: '../../../assets/images/news2.jpg' },
      ],
    },
    {
      name: 'Legacy Apartments',
      location: 'New York, NY',
      image: '../../../assets/images/news2.jpg',
      country: 'USA',
      city: 'New York',
      project: 'Legacy Apartments',
      type: 'Apartment',
      floorPlans: [
        { name: 'Legacy A', imageUrl: '../../../assets/images/news2.jpg' },
        { name: 'Legacy B', imageUrl: '../../../assets/images/news2.jpg' },
      ],
    },
    {
      name: 'The Parkside Residences',
      location: 'New York, NY',
      image: '../../../assets/images/news2.jpg',
      country: 'USA',
      city: 'New York',
      project: 'The Parkside',
      type: 'Apartment',
      floorPlans: [
        { name: 'Park A', imageUrl: '../../../assets/images/news2.jpg' },
        { name: 'Park B', imageUrl: '../../../assets/images/news2.jpg' },
      ],
    },
    {
      name: 'Cairo Central Condos',
      location: 'Cairo, Egypt',
      image: '../../../assets/images/news2.jpg',
      country: 'Egypt',
      city: 'Cairo',
      project: 'Cairo Central',
      type: 'Condo',
      floorPlans: [
        { name: 'Central A', imageUrl: '../../../assets/images/news2.jpg' },
        { name: 'Central B', imageUrl: '../../../assets/images/news2.jpg' },
      ],
    },
    {
      name: 'El Sheikh Zayed Gardens',
      location: 'Giza, Egypt',
      image: '../../../assets/images/news2.jpg',
      country: 'Egypt',
      city: 'Giza',
      project: 'El Sheikh Zayed Gardens',
      type: 'Villa',
      floorPlans: [
        { name: 'Garden A', imageUrl: '../../../assets/images/news2.jpg' },
        { name: 'Garden B', imageUrl: '../../../assets/images/news2.jpg' },
      ],
    },
    {
      name: 'Zamalek Heights',
      location: 'Cairo, Egypt',
      image: '../../../assets/images/news2.jpg',
      country: 'Egypt',
      city: 'Cairo',
      project: 'Zamalek Heights',
      type: 'Apartment',
      floorPlans: [
        { name: 'Zamalek A', imageUrl: '../../../assets/images/news2.jpg' },
        { name: 'Zamalek B', imageUrl: '../../../assets/images/news2.jpg' },
      ],
    },
    {
      name: 'Brooklyn Villas',
      location: 'New York, NY',
      image: '../../../assets/images/news2.jpg',
      country: 'USA',
      city: 'New York',
      project: 'Brooklyn Villas',
      type: 'Villa',
      floorPlans: [
        { name: 'Brooklyn A', imageUrl: '../../../assets/images/news2.jpg' },
        { name: 'Brooklyn B', imageUrl: '../../../assets/images/news2.jpg' },
      ],
    },
    {
      name: 'Manhattan Sky Condos',
      location: 'New York, NY',
      image: '../../../assets/images/news2.jpg',
      country: 'USA',
      city: 'New York',
      project: 'Manhattan Sky',
      type: 'Condo',
      floorPlans: [
        { name: 'Sky A', imageUrl: '../../../assets/images/news2.jpg' },
        { name: 'Sky B', imageUrl: '../../../assets/images/news2.jpg' },
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
}
