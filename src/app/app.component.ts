import { Component } from '@angular/core';
import { GoogleAnalyticsService } from './services/google-analytics.service';

enum Tabs { Home, Profile, Products, Docs, Contact };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-angular-google-analytics';
  tabs = Tabs;
  currentTab: number = Tabs.Home;

  constructor(private googleAnalyticsService: GoogleAnalyticsService) { }

  openTab(tab: number) {
    const tabName = String(this.tabs[tab]).toLowerCase();
    this.googleAnalyticsService.trackEvent('click_select_tab', 'click select tab' + ' ' + tabName, 'tab');
    this.currentTab = Number(tab);
  }
}
