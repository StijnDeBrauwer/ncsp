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
import {OurVisionPage} from './pages/company/our-vision-section/our-vision.page';
import {WhoWeArePage} from './pages/company/who-we-are-section/who-we-are.page';
import {PageNotFoundPage} from './pages/page-not-found/page-not-found.page';
import {OurCompanyPage} from './pages/company/our-company.component';
import {FooterComponent} from './components/footer/footer.component';
import {DesktopNavbarComponent} from './components/navigation/desktop-navbar/desktop-navbar.component';
import {LanguagePickerComponent} from './components/language-picker/language-picker.component';
import {MaterialModule} from './modules/material-module/material-module.module';
import {OurProductPage} from './pages/products/our-product-page.component';
import {OurSolutionsPage} from './pages/solutions/our-solutions-page.component';
import {OurNewsPage} from './pages/news/our-news-page.component';
import {NewsitemComponent} from './components/newsitem/newsitem.component';
import {ContactPage} from './pages/contact/contact.page';
import {ApproachPage} from './pages/company/our-approach-section/approach.page';
import {ScrollDataService} from './services/scroll/scroll-data.service';
import {CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {ProductDetailComponent} from './components/products/product-detail/product-detail.component';
import {ProductListPageComponent} from './pages/products/product-list-page/product-list-page.component';
import {ProductComponent} from './components/products/product/product.component';
import {SlideSideNavigationComponent} from './components/slide-side-navigation/slide-side-navigation.component';
import { SolutionsListPageComponent } from './pages/solutions/solutions-list-page/solutions-list-page.component';
import { SolutionComponent } from './components/solution/solution.component';
import { SolutionDetailsPageComponent } from './pages/solutions/solution-details-page/solution-details-page.component';
import { LoginComponent } from './pages/cms/login/login.component';
import { AdminComponent } from './pages/cms/admin/admin.component';


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
        ProductDetailComponent,
        ProductListPageComponent,
        ProductComponent,
        ProductComponent,
        SlideSideNavigationComponent,
        SolutionsListPageComponent,
        SolutionComponent,
        SolutionDetailsPageComponent,
        LoginComponent,
        AdminComponent
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
        OurVisionPage,
        WhoWeArePage,
        ContactPage
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    providers: [ScrollDataService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
