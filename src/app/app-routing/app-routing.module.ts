import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {LandingPage} from '../pages/landing/landing.page';
import {BrowserModule} from '@angular/platform-browser';
// import {EventsPage} from '../pages/events/events.page';
import {AboutUsPage} from '../pages/company/about-us/about-us.page';
import {ContactPage} from '../pages/company/contact/contact.page';
import {PageNotFoundPage} from '../pages/page-not-found/page-not-found.page';
import {OurCompanyComponent} from '../pages/company/our-company.component';
import {ApproachPage} from '../pages/approach/approach.page';
import {ProceedComponent} from '../pages/approach/proceed/proceed.component';
import {MissionComponent} from '../pages/approach/mission/mission.component';

const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
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
            {path: 'about', component: AboutUsPage},
            {path: 'contact', component: ContactPage}
        ],
    },
    {
        path: 'approach',
        component: ApproachPage,
        children: [
            {path: '', redirectTo: 'approach', pathMatch: 'full'},
            {path: 'mission', component: MissionComponent},
            {path: 'proceed', component: ProceedComponent}
        ],
    },
    // {
    //     path: 'company',
    //     component: OurCompanyComponent,
    //     children: [
    //         { path: '', redirectTo: 'company', pathMatch: 'full' },
    //         { path: 'about', component: AboutUsPage },
    //         { path: 'contact', component: ContactPage }
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
        RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})
    ],
    declarations: [],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
