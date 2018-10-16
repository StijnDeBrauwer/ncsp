import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {FormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {AppRoutingModule} from './modules/app-routing/app-routing.module';
import {LandingPage} from './pages/landing/landing.page';
import {MobileNavigationComponent} from './components/navigation/mobile-navigation/mobile-navigation.component';
import {AboutUsPage} from './pages/company/our-vision-section/about-us.page';
import {EventsPage} from './pages/company/who-we-are-section/events.page';
import {PageNotFoundPage} from './pages/page-not-found/page-not-found.page';
import {OurCompanyComponent} from './pages/company/our-company.component';
import {FooterComponent} from './components/footer/footer.component';
import {DesktopNavbarComponent} from './components/navigation/desktop-navbar/desktop-navbar.component';
import {LanguagePickerComponent} from './components/language-picker/language-picker.component';
import {MaterialModule} from './modules/material-module/material-module.module';
import { OurProductPageComponent } from './pages/our-product-page/our-product-page.component';
import { OurSolutionsPageComponent } from './pages/our-solutions-page/our-solutions-page.component';
import { OurNewsPageComponent } from './pages/our-news-page/our-news-page.component';
import { NewsitemComponent } from './components/newsitem/newsitem.component';
import {ContactPage} from './pages/our-contact-page/contact.page';
import {ApproachPage} from './pages/company/our-approach-section/approach.page';
import {MissionComponent} from './pages/company/our-approach-section/mission/mission.component';
import {ProceedComponent} from './pages/company/our-approach-section/proceed/proceed.component';


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
        DesktopNavbarComponent,
        LanguagePickerComponent,
        OurProductPageComponent,
        OurSolutionsPageComponent,
        OurNewsPageComponent,
        NewsitemComponent,

    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        MaterialModule,
        FormsModule,
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
