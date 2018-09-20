import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {LandingPage} from './pages/landing/landing.page';
import {NavigationComponent} from './components/navigation/navigation.component';
import {AboutUsPage} from './pages/company/about-us/about-us.page';
import {EventsPage} from './pages/company/events/events.page';
import {ContactPage} from './pages/company/contact/contact.page';
import {PageNotFoundPage} from './pages/page-not-found/page-not-found.page';
import {OurCompanyComponent} from './pages/company/our-company/our-company.component';
import { FooterComponent } from './components/footer/footer.component';
import {ResponsiveService} from './services/responsive/responsive.service';


@NgModule({
    declarations: [
        AppComponent,
        LandingPage,
        NavigationComponent,
        AboutUsPage,
        EventsPage,
        ContactPage,
        PageNotFoundPage,
        OurCompanyComponent,
        FooterComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule
    ],
    entryComponents: [
        LandingPage,
        AboutUsPage,
        EventsPage,
        ContactPage
    ],

    providers: [ResponsiveService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
