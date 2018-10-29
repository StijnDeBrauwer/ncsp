import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {APP_INITIALIZER, NgModule} from '@angular/core';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {FormsModule} from '@angular/forms';


import {AppComponent} from './app.component';
import {AppRoutingModule} from './modules/app-routing/app-routing.module';
import {LandingPage} from './pages/landing/landing.page';
import {MobileNavigationComponent} from './components/navigation/mobile-navigation/mobile-navigation.component';
import {OurVisionPage} from './pages/company/our-vision-section/our-vision.page';
import {WhoWeArePage} from './pages/company/who-we-are-section/who-we-are.page';
import {PageNotFoundPage} from './pages/page-not-found/page-not-found.page';
import {OurCompanyPage} from './pages/company/our-company.component';
import {FooterComponent} from './components/footer/footer.component';
import {DesktopNavbarComponent} from './components/navigation/desktop-navbar/desktop-navbar.component';
import {LanguagePickerComponent} from './components/language-picker/language-picker.component';
import {MaterialModule} from './modules/material-module/material-module.module';
import { OurProductPage } from './pages/our-product-page/our-product-page.component';
import { OurSolutionsPage } from './pages/our-solutions-page/our-solutions-page.component';
import { OurNewsPage } from './pages/our-news-page/our-news-page.component';
import { NewsitemComponent } from './components/newsitem/newsitem.component';
import {ContactPage} from './pages/our-contact-page/contact.page';
import {ApproachPage} from './pages/company/our-approach-section/approach.page';
import {ScrollDataService} from './services/scroll/scroll-data.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';


// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}


@NgModule({
    declarations: [
        AppComponent,
        LandingPage,
        MobileNavigationComponent,
        OurVisionPage,
        WhoWeArePage,
        ContactPage,
        PageNotFoundPage,
        OurCompanyPage,
        FooterComponent,
        ApproachPage,
        DesktopNavbarComponent,
        LanguagePickerComponent,
        OurProductPage,
        OurSolutionsPage,
        OurNewsPage,
        NewsitemComponent,
        ProductDetailComponent
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
        OurVisionPage,
        WhoWeArePage,
        ContactPage
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [ ScrollDataService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
