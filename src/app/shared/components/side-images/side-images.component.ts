import { Component, AfterViewInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-side-images',
  templateUrl: './side-images.component.html',
  styleUrls: ['./side-images.component.scss'],
})
export class SideImagesComponent implements AfterViewInit {
  allImages: string[] = [
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

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.insertRandomImages();
  }

  insertRandomImages() {
    const shuffled = this.allImages.sort(() => Math.random() - 0.5).slice(0, 10);
    const leftImages = shuffled.slice(0, 5);
    const rightImages = shuffled.slice(5);

    this.placeImages(leftImages, 'left');
    this.placeImages(rightImages, 'right');
  }

placeImages(images: string[], side: 'left' | 'right') {
  const container = document.querySelector('.layout-container');
  if (!container) return;

  const placedRanges: { top: number; bottom: number }[] = [];

  images.forEach((src) => {
    const img = this.renderer.createElement('img');
    this.renderer.setAttribute(img, 'src', src);
    this.renderer.addClass(img, 'side-image');
    this.renderer.addClass(img, side);

    let top = 0;
    let scale = 1;
    let height = 900;
    let attempts = 0;
    let rangeValid = false;

    while (!rangeValid && attempts < 25) {
      top = Math.random() * 300 - 5; // -5% to 595% vertical range (supports very tall pages)
      scale = Math.random() * 0.6 + 1; // 1.0 to 1.6
      height = scale * 200;

      const topPx = (top / 100) * window.innerHeight;
      const bottomPx = topPx + height;

      const overlaps = placedRanges.some(
        (range) => !(bottomPx < range.top || topPx > range.bottom)
      );

      if (!overlaps) {
        rangeValid = true;
        placedRanges.push({ top: topPx, bottom: bottomPx });
      }

      attempts++;
    }

    // 🧠 Randomize how far from the edge (some flush, some floating)
    const edgeOffset = Math.random() < 0.5
      ? Math.random() * 10  // close to edge (0–10px)
      : Math.random() * 100 + 50; // float inward (50–150px)

    const width = Math.random() * 100 + 220; // 220–320px

    this.renderer.setStyle(img, 'top', `${top}%`);
    this.renderer.setStyle(img, side, `${edgeOffset}px`);
    this.renderer.setStyle(img, 'transform', `scale(${scale})`);
    this.renderer.setStyle(img, 'width', `${width}px`);
    this.renderer.setStyle(img, 'height', 'auto');

    this.renderer.appendChild(container, img);
  });
}





}
