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
    },
    {
      name: 'The Metropolitan Lofts',
      location: 'New York, NY',
      image: '../../../assets/images/news2.jpg',
      country: 'USA',
      city: 'New York',
      project: 'The Metropolitan Lofts',
      type: 'Apartment',
    },
    {
      name: 'The Skyline Apartments',
      location: 'New York, NY',
      image: '../../../assets/images/news2.jpg',
      country: 'USA',
      city: 'New York',
      project: 'The Skyline Apartments',
      type: 'Condo',
    },
    {
      name: 'The Central Park Estates',
      location: 'New York, NY',
      image: '../../../assets/images/news2.jpg',
      country: 'USA',
      city: 'New York',
      project: 'The Central Park Estates',
      type: 'Apartment',
    },
    {
      name: 'The Riverside Villas',
      location: 'New York, NY',
      image: '../../../assets/images/news2.jpg',
      country: 'USA',
      city: 'New York',
      project: 'The Riverside Villas',
      type: 'Villa',
    },
    {
      name: 'The Downtown Condos',
      location: 'New York, NY',
      image: '../../../assets/images/news2.jpg',
      country: 'USA',
      city: 'New York',
      project: 'The Downtown Condos',
      type: 'Condo',
    },
    {
      name: 'Palm Grove Estates',
      location: 'Cairo, Egypt',
      image: '../../../assets/images/news2.jpg',
      country: 'Egypt',
      city: 'Cairo',
      project: 'Palm Grove Estates',
      type: 'Villa',
    },
    {
      name: 'Jazal Residences',
      location: 'Cairo, Egypt',
      image: '../../../assets/images/news2.jpg',
      country: 'Egypt',
      city: 'Cairo',
      project: 'Jazal',
      type: 'Apartment',
    },
    {
      name: 'Giza Heights',
      location: 'Giza, Egypt',
      image: '../../../assets/images/news2.jpg',
      country: 'Egypt',
      city: 'Giza',
      project: 'Giza Heights',
      type: 'Apartment',
    },
    {
      name: 'Nile River View Condos',
      location: 'Cairo, Egypt',
      image: '../../../assets/images/news2.jpg',
      country: 'Egypt',
      city: 'Cairo',
      project: 'Nile River View',
      type: 'Condo',
    },
    {
      name: 'The Oasis Villas',
      location: 'Cairo, Egypt',
      image: '../../../assets/images/news2.jpg',
      country: 'Egypt',
      city: 'Cairo',
      project: 'The Oasis',
      type: 'Villa',
    },
    {
      name: 'Legacy Apartments',
      location: 'New York, NY',
      image: '../../../assets/images/news2.jpg',
      country: 'USA',
      city: 'New York',
      project: 'Legacy Apartments',
      type: 'Apartment',
    },
    {
      name: 'The Parkside Residences',
      location: 'New York, NY',
      image: '../../../assets/images/news2.jpg',
      country: 'USA',
      city: 'New York',
      project: 'The Parkside',
      type: 'Apartment',
    },
    {
      name: 'Cairo Central Condos',
      location: 'Cairo, Egypt',
      image: '../../../assets/images/news2.jpg',
      country: 'Egypt',
      city: 'Cairo',
      project: 'Cairo Central',
      type: 'Condo',
    },
    {
      name: 'El Sheikh Zayed Gardens',
      location: 'Giza, Egypt',
      image: '../../../assets/images/news2.jpg',
      country: 'Egypt',
      city: 'Giza',
      project: 'El Sheikh Zayed Gardens',
      type: 'Villa',
    },
    {
      name: 'Zamalek Heights',
      location: 'Cairo, Egypt',
      image: '../../../assets/images/news2.jpg',
      country: 'Egypt',
      city: 'Cairo',
      project: 'Zamalek Heights',
      type: 'Apartment',
    },
    {
      name: 'Brooklyn Villas',
      location: 'New York, NY',
      image: '../../../assets/images/news2.jpg',
      country: 'USA',
      city: 'New York',
      project: 'Brooklyn Villas',
      type: 'Villa',
    },
    {
      name: 'Manhattan Sky Condos',
      location: 'New York, NY',
      image: '../../../assets/images/news2.jpg',
      country: 'USA',
      city: 'New York',
      project: 'Manhattan Sky',
      type: 'Condo',
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
