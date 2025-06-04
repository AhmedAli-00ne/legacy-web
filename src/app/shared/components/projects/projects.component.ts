import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements AfterViewInit {
  @ViewChild('container') container!: ElementRef;

  ngAfterViewInit(): void {
    const columns = this.container.nativeElement.querySelectorAll(
      '.project-column .content'
    );

    gsap.from(columns, {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.3,
      ease: 'power3.out',
    });
  }
}
