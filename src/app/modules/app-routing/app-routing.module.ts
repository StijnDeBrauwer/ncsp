import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LandingPage} from '../../pages/landing/landing.page';
import {BrowserModule} from '@angular/platform-browser';
import {PageNotFoundPage} from '../../pages/page-not-found/page-not-found.page';
import {OurCompanyPage} from '../../pages/company/our-company.component';
import {MaterialModule} from '../material-module/material-module.module';
import {OurProductPage} from '../../pages/products/our-product-page.component';
import {OurSolutionsPage} from '../../pages/solutions/our-solutions-page.component';
import {OurNewsPage} from '../../pages/news/our-news-page.component';
import {ContactPage} from '../../pages/contact/contact.page';
import {ProductListPageComponent} from 'src/app/pages/products/product-list-page/product-list-page.component';
import {ProductType} from '../../models/product-type.model';

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
            {path: '', redirectTo: 'company', pathMatch: 'full'},
            {path: 'vision', component: OurCompanyPage, data: {page: 'company'}},
            {path: 'who-we-are', component: OurCompanyPage, data: {page: 'who-we-are'}},
            {path: 'approach', component: OurCompanyPage, data: {page: 'approach'}},
        ],
    },
    {
        path: 'products',
        component: OurProductPage,
        // children: [
        //     {path: '', redirectTo: 'products', pathMatch: 'full'},
        //     {path: 'crown-baele', component: ProductListPageComponent, data: {type: ProductType.CROWN_BAELE}},
        //     {path: 'products/third-party', component: ProductListPageComponent, data: {type: ProductType.THIRD_PARTY}},
        // ]
    },
    {
        path: 'products/crown-baele',
        component: ProductListPageComponent,
        data: {type: ProductType.CROWN_BAELE}
    },
    {
        path: 'products/third-party',
        component: ProductListPageComponent,
        data: {type: ProductType.THIRD_PARTY}
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
