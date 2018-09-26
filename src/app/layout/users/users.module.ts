
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { UserRouterModule } from './users.router';
import { ExportFileModule } from '../../export-file/export-file.module';




//------components ----
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListingComponent } from './user-listing/user-listing.component';



@NgModule({
  imports: [
    CommonModule,
    UserRouterModule,  
    ExportFileModule,
    
  ],

  declarations: [
    UsersComponent,
    UserDetailsComponent,
    UserListingComponent,
    
  ]
})
export class UsersModule {}
