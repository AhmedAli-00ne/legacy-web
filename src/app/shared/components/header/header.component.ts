import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  menuOpen = false;
  darkMode = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    
    document.body.classList.toggle('menu-open', this.menuOpen);

  }

  toggleDropdown(event: Event): void {
    event.stopPropagation();
    const target = event.currentTarget as HTMLElement;

    // Close all other dropdowns
    document.querySelectorAll('.has-dropdown.open').forEach(el => {
      if (el !== target) {
        el.classList.remove('open');
      }
    });

    // Toggle clicked one
    target.classList.toggle('open');
  }

  
  
}
