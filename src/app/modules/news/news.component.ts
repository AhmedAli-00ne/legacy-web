import { Component } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
 tabs = ['Latest News', 'Industry Updates', 'Company Announcements'];
  activeTab = 'Latest News';

  setActiveTab(tab: string) {
    this.activeTab = tab;
  }
}
