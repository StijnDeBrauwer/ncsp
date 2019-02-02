import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {HttpClientModule, HttpClient} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './modules/app-routing/app-routing.module';
import {LandingPage} from './pages/landing/landing.page';
import {MobileNavigationComponent} from './components/navigation/mobile-navigation/mobile-navigation.component';
import {PageNotFoundPage} from './pages/page-not-found/page-not-found.page';
import {FooterComponent} from './components/footer/footer.component';
import {DesktopNavbarComponent} from './components/navigation/desktop-navbar/desktop-navbar.component';
import {LanguagePickerComponent} from './components/language-picker/language-picker.component';
import {MaterialModule} from './modules/material-module/material-module.module';
import {OurProductPage} from './pages/products/product.page';
import {OurNewsPage} from './pages/news/our-news-page.component';
import {NewsitemComponent} from './components/newsitem/newsitem.component';
import {ContactPage} from './pages/contact/contact.page';
import {ScrollDataService} from './services/scroll/scroll-data.service';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {ProductDetailComponent} from './components/products/product-detail/product-detail.component';
import {ProductCardComponent} from './components/products/product-card/product-card.component';
import {SlideSideNavigationComponent} from './components/slide-side-navigation/slide-side-navigation.component';
import {ProductDetailDesktopComponent} from './components/products/product-detail/product-detail-desktop/product-detail-desktop.component';
import {ProductDetailMobileComponent} from './components/products/product-detail/product-detail-mobile/product-detail-mobile.component';
import {ScrollButtonComponent} from './components/scroll-button/scroll-button.component';
import {ProductListComponent} from './components/products/product-list/product-list.page';
import {ServicesPage} from './pages/services/services.component';


// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}


@NgModule({
    declarations: [
        AppComponent,
        LandingPage,
        MobileNavigationComponent,
        ContactPage,
        PageNotFoundPage,
        FooterComponent,
        DesktopNavbarComponent,
        LanguagePickerComponent,
        OurProductPage,
        OurNewsPage,
        NewsitemComponent,
        ProductDetailComponent,
        ProductListComponent,
        ProductCardComponent,
        ProductCardComponent,
        SlideSideNavigationComponent,
        SlideSideNavigationComponent,
        ProductDetailDesktopComponent,
        ProductDetailMobileComponent,
        ScrollButtonComponent,
        ServicesPage,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
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
        ContactPage
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [ScrollDataService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
