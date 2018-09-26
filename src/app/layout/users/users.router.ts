import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserListingComponent } from './user-listing/user-listing.component';

const userroutes: Routes = [
    {
        path: '', component: UsersComponent,
        children: [
            { path: '', component : UserListingComponent },
           { path: 'details', component : UserDetailsComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(userroutes)],
    exports: [RouterModule]
})
export class UserRouterModule {
}
