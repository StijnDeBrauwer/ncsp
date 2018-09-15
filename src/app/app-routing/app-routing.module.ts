import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {LandingPage} from "../pages/landing/landing.page";
import {BrowserModule} from "@angular/platform-browser";
import {EventsPage} from "../pages/events/events.page";
import {AboutUsPage} from "../pages/about-us/about-us.page";
import {ContactPage} from "../pages/contact/contact.page";

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: 'home', component: LandingPage},
    {path: 'events', component: EventsPage},
    {path: 'about', component: AboutUsPage},
    {path: 'contact', component: ContactPage}

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
