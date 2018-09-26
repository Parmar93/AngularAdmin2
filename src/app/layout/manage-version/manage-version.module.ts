import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageVersionComponent } from './manage-version.component';
import { ManageVersionRouterModule } from './manage-version.router';
import { ExportFileModule } from '../../export-file/export-file.module';


//------components ----
import { ManageVersionListingComponent } from './manage-version-listing/manage-version-listing.component';
import { ManageVersionAddComponent } from './manage-version-add/manage-version-add.component';

@NgModule({
  imports: [
    CommonModule,
    ManageVersionRouterModule,  
    ExportFileModule,
  ],
  declarations: [
    ManageVersionComponent,
    ManageVersionListingComponent,
    ManageVersionAddComponent,
    ManageVersionListingComponent,
    ManageVersionAddComponent
   
  ]
})
export class ManageVersionModule {}
