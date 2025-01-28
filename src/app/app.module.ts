import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { GtagModule } from 'angular-gtag';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './page/components/homepage/homepage.component';
import { ContactComponent } from './page/components/contact/contact.component';
import { AboutComponent } from './page/components/about/about.component';


@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ContactComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GtagModule.forRoot({ trackingId: 'YOUR_TRACKING_ID' }) // เปลี่ยน YOUR_TRACKING_ID เป็น Tracking ID ของคุณ
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
