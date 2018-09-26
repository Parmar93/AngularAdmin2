import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionComponent } from './subscription.component';
import { SubscriptionRouterModule } from './subscription.router';
import { ExportFileModule } from '../../export-file/export-file.module';
//------components ----
import { SubscriptionListingComponent } from './subscription-listing/subscription-listing.component';


@NgModule({
  imports: [
    CommonModule,
    SubscriptionRouterModule,  
    ExportFileModule,
  ],
  declarations: [
    SubscriptionComponent,
    SubscriptionListingComponent,
    
   
  ]
})
export class SubscriptionModule {}
