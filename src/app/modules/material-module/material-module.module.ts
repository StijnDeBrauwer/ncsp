import {NgModule} from '@angular/core';

import {
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule

} from '@angular/material';

@NgModule({
    imports: [
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatSelectModule,
        MatButtonModule,
        MatCardModule

    ],
    exports: [
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatSelectModule,
        MatButtonModule,
        MatCardModule

    ],
    providers: []
})
export class MaterialModule {}
