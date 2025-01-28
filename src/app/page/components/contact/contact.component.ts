import { Component } from '@angular/core';

import { Gtag } from 'angular-gtag';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  constructor(private gtag: Gtag) {}

  onClickButton() {
    this.gtag.event('click_button', {
      event_category: 'button',
      event_label: 'click_submit'
    });
  }
}
