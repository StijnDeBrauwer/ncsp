import {NgModule} from '@angular/core';

import {
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatDialogModule,
    MatSnackBarModule

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
        MatDialogModule,
        MatSnackBarModule
    ],
    exports: [
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatSelectModule,
        MatButtonModule,
        MatCardModule,
        MatTabsModule,
        MatDialogModule,
        MatSnackBarModule
    ],
    providers: []
})
export class MaterialModule {}
