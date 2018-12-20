import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LandingPage} from '../../pages/landing/landing.page';
import {BrowserModule} from '@angular/platform-browser';
import {PageNotFoundPage} from '../../pages/page-not-found/page-not-found.page';
import {MaterialModule} from '../material-module/material-module.module';
import {OurProductPage} from '../../pages/products/product.page';
import {OurNewsPage} from '../../pages/news/our-news-page.component';
import {ContactPage} from '../../pages/contact/contact.page';
import {PartsPage} from '../../pages/products/parts/parts.component';
import {ServicesPage} from '../../pages/products/services/services.component';
import {UpgradesPage} from '../../pages/products/upgrades/upgrades.component';

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
        path: 'products',
        component: OurProductPage,
    },
    {
        path: 'products/parts',
        component: PartsPage,
    },

    {
        path: 'products/upgrades',
        component: UpgradesPage,
    },
    {
        path: 'products/services',
        component: ServicesPage,
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
        RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled', useHash: true})
    ],
    declarations: [],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
