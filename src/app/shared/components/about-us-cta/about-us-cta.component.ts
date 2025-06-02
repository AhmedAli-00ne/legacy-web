import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-about-us-cta',
  templateUrl: './about-us-cta.component.html',
  styleUrls: ['./about-us-cta.component.scss']
})
export class AboutUsCtaComponent {
  constructor(private router: Router) {}

  navigateToBoard() {
    this.router.navigate(['/board-members']); // make sure this route exists
  }
}
