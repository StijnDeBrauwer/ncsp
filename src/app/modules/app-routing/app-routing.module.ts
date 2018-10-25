import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LandingPage} from '../../pages/landing/landing.page';
import {BrowserModule} from '@angular/platform-browser';
import {PageNotFoundPage} from '../../pages/page-not-found/page-not-found.page';
import {OurCompanyPage} from '../../pages/company/our-company.component';
import {MaterialModule} from '../material-module/material-module.module';
import {OurProductPage} from '../../pages/our-product-page/our-product-page.component';
import {OurSolutionsPage} from '../../pages/our-solutions-page/our-solutions-page.component';
import {OurNewsPage} from '../../pages/our-news-page/our-news-page.component';
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
        component: OurCompanyPage,
        children: [
            {path: '', redirectTo: 'about', pathMatch: 'full'},
            {path: 'vision', component: OurCompanyPage},
            {path: 'who-we-are', component: OurCompanyPage},
            {path: 'approach', component: OurCompanyPage},

        ],
    },
    {
        path: 'products',
        component: OurProductPage,
    },

    {
        path: 'solutions',
        component: OurSolutionsPage
    },
    {
        path: 'news',
        component: OurNewsPage
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
    //         { path: 'about', component: OurVisionPage },
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
