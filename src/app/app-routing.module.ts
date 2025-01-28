import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './page/components/contact/contact.component';
import { AboutComponent } from './page/components/about/about.component';
import { HomepageComponent } from './page/components/homepage/homepage.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent }, 
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: HomepageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
