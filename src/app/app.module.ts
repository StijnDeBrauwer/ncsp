import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { LandingPage } from './pages/landing/landing.page';
import { NavigationComponent } from './components/navigation/navigation.component';
import { AboutUsPage } from './pages/about-us/about-us.page';
import { EventsPage } from './pages/events/events.page';
import { ContactPage } from './pages/contact/contact.page';

@NgModule({
  declarations: [
    AppComponent,
    LandingPage,
    NavigationComponent,
    AboutUsPage,
    EventsPage,
    ContactPage
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
