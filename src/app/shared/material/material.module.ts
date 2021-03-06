import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [
      MatToolbarModule,
      MatSidenavModule,
      MatButtonModule,
      MatIconModule,
      MatFormFieldModule,
      MatInputModule,
      MatTooltipModule,
      MatExpansionModule,
      MatSelectModule,
      MatSnackBarModule,
      MatProgressBarModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatDialogModule,
      MatChipsModule,
      MatListModule,
      MatPaginatorModule,
      MatRadioModule,
      MatCardModule,
      MatAutocompleteModule,
      MatProgressSpinnerModule,
    ]
  ],
  providers: [
    { provide: MatDialogRef, useValue: {} },
    { provide: MAT_DIALOG_DATA, useValue: [] }
  ],
  exports: [
    [
      MatToolbarModule,
      MatSidenavModule,
      MatButtonModule,
      MatIconModule,
      MatFormFieldModule,
      MatInputModule,
      MatTableModule,
      MatCheckboxModule,
      MatTooltipModule,
      MatSelectModule,
      MatExpansionModule,
      MatSnackBarModule,
      MatProgressBarModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatDialogModule,
      MatChipsModule,
      MatListModule,
      MatPaginatorModule,
      MatRadioModule,
      MatCardModule,
      MatAutocompleteModule,
      MatProgressSpinnerModule,
    ]
  ]
})
export class MaterialModule { }
