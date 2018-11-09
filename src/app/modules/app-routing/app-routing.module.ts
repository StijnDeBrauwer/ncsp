import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LandingPage } from '../../pages/landing/landing.page';
import { BrowserModule } from '@angular/platform-browser';
import { PageNotFoundPage } from '../../pages/page-not-found/page-not-found.page';
import { OurCompanyPage } from '../../pages/company/our-company.component';
import { MaterialModule } from '../material-module/material-module.module';
import { ProductGroupPage } from '../../pages/products/product-group-page/product-group.page';
import { OurProductPage } from '../../pages/products/product.page';
import { OurSolutionsPage } from '../../pages/solutions/our-solutions-page.component';
import { OurNewsPage } from '../../pages/news/our-news-page.component';
import { ContactPage } from '../../pages/contact/contact.page';
import { ProductListPage } from '../../pages/products/product-types/product-list-page/product-list.page';
import { SupplierType } from '../../models/supplier-type.model';
import { ProductTypePage } from '../../pages/products/product-types/product-type.page';
import { ProductType } from '../../models/product-type.model';
import { SolutionType } from '../../models/solution-type.model';
import { SolutionsListPageComponent } from 'src/app/pages/solutions/solutions-list-page/solutions-list-page.component';
import { SolutionDetailsPageComponent } from 'src/app/pages/solutions/solution-details-page/solution-details-page.component';
import { SolutionTypePage } from '../../pages/solutions/solution-type/solution-type.page';
import { LoginComponent } from 'src/app/pages/cms/login/login.component';
import { AdminComponent } from 'src/app/pages/cms/dashboard/admin.component';
import { LogoutComponent } from 'src/app/pages/cms/logout/logout.component';
import { DashboardHomeComponent } from 'src/app/pages/cms/dashboard/dashboard-home/dashboard-home.component';
import { DashboardProductsComponent } from 'src/app/pages/cms/dashboard/dashboard-products/dashboard-products.component';
import { DashboardSolutionsComponent } from 'src/app/pages/cms/dashboard/dashboard-solutions/dashboard-solutions.component';
import { DashboardNewsComponent } from 'src/app/pages/cms/dashboard/dashboard-news/dashboard-news.component';
import { Dashboard404Component } from 'src/app/pages/cms/dashboard/dashboard404/dashboard404.component';

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
            { path: '', redirectTo: 'company', pathMatch: 'full' },
            { path: 'vision', component: OurCompanyPage, data: { page: 'company' } },
            { path: 'who-we-are', component: OurCompanyPage, data: { page: 'who-we-are' } },
            { path: 'approach', component: OurCompanyPage, data: { page: 'approach' } },
        ],
    },
    {
        path: 'products',
        component: OurProductPage,
        children: [
            { path: '', redirectTo: 'suppliers', pathMatch: 'full' },
            {
                path: 'suppliers',
                component: ProductGroupPage
            },
            {
                path: 'crown-baele',
                component: ProductTypePage,
                children: [
                    { path: '', redirectTo: 'parts', pathMatch: 'full' },
                    {
                        path: 'parts',
                        component: ProductListPage,
                        data: { type: SupplierType.CROWN_BAELE, product: ProductType.PARTS },
                    },
                    {
                        path: 'upgrades',
                        component: ProductListPage,
                        data: { type: SupplierType.CROWN_BAELE, product: ProductType.UPGRADES },
                    },
                    {
                        path: 'add-ons',
                        component: ProductListPage,
                        data: { type: SupplierType.CROWN_BAELE, product: ProductType.ADD_ONS },
                    },
                    {
                        path: 'services',
                        component: ProductListPage,
                        data: { type: SupplierType.CROWN_BAELE, product: ProductType.SERVICES },
                    }
                ]
            },
            {
                path: 'third-party',
                component: ProductTypePage,
                children: [
                    { path: '', redirectTo: 'parts', pathMatch: 'full' },
                    {
                        path: 'parts',
                        component: ProductListPage,
                        data: { type: SupplierType.THIRD_PARTY, product: ProductType.PARTS },
                    },
                    {
                        path: 'upgrades',
                        component: ProductListPage,
                        data: { type: SupplierType.THIRD_PARTY, product: ProductType.UPGRADES },
                    },
                    {
                        path: 'add-ons',
                        component: ProductListPage,
                        data: { type: SupplierType.THIRD_PARTY, product: ProductType.ADD_ONS },
                    },
                    {
                        path: 'services',
                        component: ProductListPage,
                        data: { type: SupplierType.THIRD_PARTY, product: ProductType.SERVICES },
                    }
                ]
            },
        ]
    },
    {
        path: 'solutions',
        component: OurSolutionsPage
    },

    {
        path: 'solutions/type',
        component: SolutionTypePage,
        children: [
            { path: '', redirectTo: 'bottlewashers', pathMatch: 'full' },
            {
                path: 'bottlewashers',
                component: SolutionsListPageComponent,
                data: { type: SolutionType.BOTTLE_WASHERS }
            },
            {
                path: 'bottlewashers/:id',
                component: SolutionDetailsPageComponent
            },
            {
                path: 'fillers',
                component: SolutionsListPageComponent,
                data: { type: SolutionType.FILTERS }
            },

            {
                path: 'fillers/:id',
                component: SolutionDetailsPageComponent
            },
            {
                path: 'other',
                component: SolutionsListPageComponent,
                data: { type: SolutionType.OTHERS }
            },
            {
                path: 'other/:id',
                component: SolutionDetailsPageComponent
            }
        ]
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
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'logout',
        component: LogoutComponent
    },
    {
        path: 'admin',
        component: AdminComponent,
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: DashboardHomeComponent },
            { path: 'products', component: DashboardProductsComponent },
            { path: 'solutions', component: DashboardSolutionsComponent },
            { path: 'news', component: DashboardNewsComponent },
            { path: '**', component: Dashboard404Component }
        ]
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
        RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled', useHash: true })
    ],
    declarations: [],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
