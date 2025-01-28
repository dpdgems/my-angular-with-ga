import { Component } from '@angular/core';

import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-angular-google-analytics';

  constructor(private gaService: GoogleAnalyticsService) { }

  onChangePage(page: string) {
    this.gaService.event('click_open_page', 'menu', page);
  }
}
