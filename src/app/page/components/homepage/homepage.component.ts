import { Component, OnInit } from '@angular/core';

import { GoogleAnalyticsService } from 'ngx-google-analytics';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  constructor(private gaService: GoogleAnalyticsService) { }


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.gaService.pageView('/home', 'Homepage');
  }
}
