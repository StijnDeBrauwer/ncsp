import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LandingPage} from '../../pages/landing/landing.page';
import {BrowserModule} from '@angular/platform-browser';
import {PageNotFoundPage} from '../../pages/page-not-found/page-not-found.page';
import {OurCompanyComponent} from '../../pages/company/our-company.component';
import {MaterialModule} from '../material-module/material-module.module';
import {OurProductPageComponent} from '../../pages/our-product-page/our-product-page.component';
import {OurSolutionsPageComponent} from '../../pages/our-solutions-page/our-solutions-page.component';
import {OurNewsPageComponent} from '../../pages/our-news-page/our-news-page.component';
import {ContactPage} from '../../pages/our-contact-page/contact.page';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
    },
    {
        path: 'home',
        component: LandingPage


    },
    {
        path: 'company',
        component: OurCompanyComponent,
        children: [
            {path: '', redirectTo: 'about', pathMatch: 'full'},
            {path: 'about', component: OurCompanyComponent},
            {path: 'who-we-are', component: OurCompanyComponent},
            {path: 'approach', component: OurCompanyComponent},

        ],
    },
    {
        path: 'products',
        component: OurProductPageComponent,
    },

    {
        path: 'solutions',
        component: OurSolutionsPageComponent
    },
    {
      path: 'news',
      component: OurNewsPageComponent
    },
    {
        path: 'contact',
        component: ContactPage
    },
    // {
    //     path: 'company',
    //     component: OurCompanyComponent,
    //     children: [
    //         { path: '', redirectTo: 'company', pathMatch: 'full' },
    //         { path: 'about', component: AboutUsPage },
    //         { path: 'our-contact-page', component: ContactPage }
    //     ]
    // },
    {
        path: '**',
        component: PageNotFoundPage
    },

];

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        MaterialModule,
        RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})
    ],
    declarations: [],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
