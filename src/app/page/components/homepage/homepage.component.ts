import { Component } from '@angular/core';

import { Gtag } from 'angular-gtag';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
constructor(private gtag: Gtag) {}

  onClickButton() {
    this.gtag.event('click_button', {
      event_category: 'button',
      event_label: 'click_submit'
    });
  }
}
