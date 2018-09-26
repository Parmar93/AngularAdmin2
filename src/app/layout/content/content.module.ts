import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { ContentRouterModule } from './content.router';
import { ExportFileModule } from '../../export-file/export-file.module';
import { CKEditorModule } from 'ng2-ckeditor';


//------components ----
import { ContentListingComponent } from './content-listing/content-listing.component';
import { ContentAddComponent } from './content-add/content-add.component';

@NgModule({
  imports: [
    CommonModule,
    ContentRouterModule,  
    ExportFileModule,
    CKEditorModule
  ],
  declarations: [
    ContentComponent,
    ContentListingComponent,
    ContentAddComponent
   
  ]
})
export class ContentModule {}
