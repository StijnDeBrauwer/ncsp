import {NgModule} from '@angular/core';

import {
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatCheckboxModule

} from '@angular/material';

@NgModule({
    imports: [
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatSelectModule,
        MatButtonModule,
        MatCardModule,
        MatTabsModule,
        MatCheckboxModule
    ],
    exports: [
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatSelectModule,
        MatButtonModule,
        MatCardModule,
        MatTabsModule,
        MatCheckboxModule
    ],
    providers: []
})
export class MaterialModule {}
