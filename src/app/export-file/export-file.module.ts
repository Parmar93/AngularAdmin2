import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//---- materials----
import {
  MatSelectModule,
  MatTabsModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';
//---- materials----
import {FormsModule} from '@angular/forms';
//---- Shared Page Header----
import { PageHeaderModule } from '../shared';
import { DialogComponent } from '../layout/dialog/dialog.component';




@NgModule({
  imports: [
    CommonModule,
    MatSelectModule,
    MatTabsModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    PageHeaderModule,
    
  ],
  exports : [
    MatSelectModule,
    MatPaginatorModule,
    MatTabsModule,
    MatSortModule,
    MatTableModule,
    FormsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    PageHeaderModule,
    DialogComponent
  ],
  entryComponents:[DialogComponent],
  declarations: [DialogComponent]
})
export class ExportFileModule { }
