import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-properties-cta',
  templateUrl: './properties-cta.component.html',
  styleUrls: ['./properties-cta.component.scss']
})
export class PropertiesCtaComponent {
constructor(private router: Router) {}
  navigateToBoard() {
    this.router.navigate(['/board-members']); // make sure this route exists
  }
}
