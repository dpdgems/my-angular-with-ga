import { Component, OnInit } from '@angular/core';

import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  constructor(private gaService: GoogleAnalyticsService) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.gaService.pageView('/about', 'About');
  }
}
