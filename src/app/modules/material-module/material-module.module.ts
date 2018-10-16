import {NgModule} from '@angular/core';

import {

    MatIconModule, MatSelectModule
} from '@angular/material';

@NgModule({
    imports: [
        MatIconModule,
        MatSelectModule
    ],
    exports: [
        MatIconModule,
        MatSelectModule
    ],
    providers: []
})
export class MaterialModule {
}