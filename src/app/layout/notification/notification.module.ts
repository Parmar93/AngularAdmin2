import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationComponent } from './notification.component';
import { NotificationRouterModule } from './notification.router';
import { ExportFileModule } from '../../export-file/export-file.module';
//------components ----
import { NotificationListingComponent } from './notification-listing/notification-listing.component';
import { NotificationAddComponent } from './notification-add/notification-add.component';

@NgModule({
  imports: [
    CommonModule,
    NotificationRouterModule,  
    ExportFileModule,
  ],
  declarations: [
    NotificationComponent,
    NotificationListingComponent,
    NotificationAddComponent
   
  ]
})
export class NotificationModule {}
