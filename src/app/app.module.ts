import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './modules/app-routing/app-routing.module';
import { LandingPage } from './pages/landing/landing.page';
import { MobileNavigationComponent } from './components/navigation/mobile-navigation/mobile-navigation.component';
import { OurVisionPage } from './pages/company/our-vision-section/our-vision.page';
import { WhoWeArePage } from './pages/company/who-we-are-section/who-we-are.page';
import { PageNotFoundPage } from './pages/page-not-found/page-not-found.page';
import { OurCompanyPage } from './pages/company/our-company.component';
import { FooterComponent } from './components/footer/footer.component';
import { DesktopNavbarComponent } from './components/navigation/desktop-navbar/desktop-navbar.component';
import { LanguagePickerComponent } from './components/language-picker/language-picker.component';
import { MaterialModule } from './modules/material-module/material-module.module';
import { ProductGroupPage } from './pages/products/product-group-page/product-group.page';
import { OurProductPage } from './pages/products/product.page';
import { OurSolutionsPage } from './pages/solutions/our-solutions-page.component';
import { OurNewsPage } from './pages/news/our-news-page.component';
import { NewsitemComponent } from './components/newsitem/newsitem.component';
import { ContactPage } from './pages/contact/contact.page';
import { ApproachPage } from './pages/company/our-approach-section/approach.page';
import { ScrollDataService } from './services/scroll/scroll-data.service';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProductDetailComponent } from './components/products/product-detail/product-detail.component';
import { ProductListPage } from './pages/products/product-types/product-list-page/product-list.page';
import { ProductCardComponent } from './components/products/product-card/product-card.component';
import { SlideSideNavigationComponent } from './components/slide-side-navigation/slide-side-navigation.component';
import { ProductTypePage } from './pages/products/product-types/product-type.page';
import { SolutionsListPageComponent } from './pages/solutions/solutions-list-page/solutions-list-page.component';
import { SolutionComponent } from './components/solution/solution.component';
import { SolutionDetailsPageComponent } from './pages/solutions/solution-details-page/solution-details-page.component';
import { ProductDetailDesktopComponent } from './components/products/product-detail/product-detail-desktop/product-detail-desktop.component';
import { ProductDetailMobileComponent } from './components/products/product-detail/product-detail-mobile/product-detail-mobile.component';
import { SolutionTypePage } from './pages/solutions/solution-type/solution-type.page';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { LoginComponent } from './pages/cms/login/login.component';
import { AdminComponent } from './pages/cms/dashboard/admin.component';
import { AdminNavigationComponent } from './components/navigation/admin-navigation/admin-navigation.component';
import { LogoutComponent } from './pages/cms/logout/logout.component';
import { DashboardHomeComponent } from './pages/cms/dashboard/dashboard-home/dashboard-home.component';
import { DashboardProductsComponent } from './pages/cms/dashboard/dashboard-products/dashboard-products.component';
import { DashboardSolutionsComponent } from './pages/cms/dashboard/dashboard-solutions/dashboard-solutions.component';
import { DashboardNewsComponent } from './pages/cms/dashboard/dashboard-news/dashboard-news.component';
import { Dashboard404Component } from './pages/cms/dashboard/dashboard404/dashboard404.component';


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
        ProductListPage,
        ProductCardComponent,
        ProductCardComponent,
        SlideSideNavigationComponent,
        ProductGroupPage,
        ProductTypePage,
        SlideSideNavigationComponent,
        SolutionsListPageComponent,
        SolutionComponent,
        SolutionDetailsPageComponent,
        LoginComponent,
        AdminComponent,
        ProductDetailDesktopComponent,
        ProductDetailMobileComponent,
        SolutionTypePage,
        AdminNavigationComponent,
        LogoutComponent,
        DashboardHomeComponent,
        DashboardProductsComponent,
        DashboardSolutionsComponent,
        DashboardNewsComponent,
        Dashboard404Component
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
