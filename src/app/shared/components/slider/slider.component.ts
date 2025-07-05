import { Component } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
})
export class SliderComponent {
  images: string[] = [
    'assets/images/Renders/1.png',
    'assets/images/Renders/2.jpg',
    'assets/images/Renders/3.jpg',
    'assets/images/Renders/4.png',
    'assets/images/Renders/5.png',
    'assets/images/Renders/6.png',
    'assets/images/Renders/7.png',
    'assets/images/Renders/8.jpg',
    'assets/images/Renders/9.png',
    'assets/images/Renders/10.png',
    'assets/images/Renders/11.png',
    'assets/images/Renders/12.png',
    'assets/images/Renders/13.jpg',
    'assets/images/Renders/14.jpg',
    'assets/images/Renders/15.jpg',
    'assets/images/Renders/16.jpg',
    'assets/images/Renders/17.jpg',
    'assets/images/Renders/18.jpg',
    'assets/images/Renders/19.jpg',
    'assets/images/Renders/20.jpg',
  ];

  hoveredIndex: number | null = null;
  previewLeft = 0;
  previewTop = 0;

  showPreview(index: number, event: MouseEvent) {
    this.hoveredIndex = index;

    const rect = (event.target as HTMLElement).getBoundingClientRect();
    this.previewLeft = rect.left + rect.width / 2 - 200;
    this.previewTop = rect.top - 220; // place above
  }

  hidePreview() {
    this.hoveredIndex = null;
  }
}
