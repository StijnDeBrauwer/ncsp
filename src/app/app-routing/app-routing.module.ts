import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LandingPage} from '../pages/landing/landing.page';
import {BrowserModule} from '@angular/platform-browser';
import {EventsPage} from '../pages/events/events.page';
import {AboutUsPage} from '../pages/about-us/about-us.page';
import {ContactPage} from '../pages/contact/contact.page';
import {PageNotFoundPage} from '../pages/page-not-found/page-not-found.page';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        component: PageNotFoundPage
    },
    {
        path: 'home',
        component: LandingPage
    }

];

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
