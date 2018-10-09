import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClientModule, HttpClient} from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { LandingPage } from './pages/landing/landing.page';
import { MobileNavigationComponent } from './components/navigation/mobile-navigation/mobile-navigation.component';
import { AboutUsPage } from './pages/company/about-us/about-us.page';
import { EventsPage } from './pages/company/events/events.page';
import { ContactPage } from './pages/company/contact/contact.page';
import { PageNotFoundPage } from './pages/page-not-found/page-not-found.page';
import { OurCompanyComponent } from './pages/company/our-company.component';
import { FooterComponent } from './components/footer/footer.component';
import { ApproachPage } from './pages/approach/approach.page';
import { MissionComponent } from './pages/approach/mission/mission.component';
import { ProceedComponent } from './pages/approach/proceed/proceed.component';
import { DesktopNavbarComponent } from './components/navigation/desktop-navbar/desktop-navbar.component';



// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    LandingPage,
    MobileNavigationComponent,
    AboutUsPage,
    EventsPage,
    ContactPage,
    PageNotFoundPage,
    OurCompanyComponent,
    FooterComponent,
    ApproachPage,
    MissionComponent,
    ProceedComponent,
    DesktopNavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
           loader: {
               provide: TranslateLoader,
               useFactory: HttpLoaderFactory,
               deps: [HttpClient]
           }
       })
  ],
  entryComponents: [
    LandingPage,
    AboutUsPage,
    EventsPage,
    ContactPage
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
