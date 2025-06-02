import { Component } from '@angular/core';

@Component({
  selector: 'app-about2',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class LegacyAboutComponent {
  tabs = ['About', 'CEO Message', 'Philosophy', 'Mission & Vision', 'Board of Directors', 'Awards'];
  activeTab = 'About';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
