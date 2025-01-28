import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxGoogleAnalyticsModule, NgxGoogleAnalyticsRouterModule } from 'ngx-google-analytics';

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
    NgxGoogleAnalyticsModule.forRoot('G-BVQPQFGK89'),  // เปลี่ยน YOUR_TRACKING_ID เป็น Tracking ID ของคุณ
    NgxGoogleAnalyticsRouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
