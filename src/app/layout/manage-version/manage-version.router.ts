import { ManageVersionComponent } from './manage-version.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManageVersionListingComponent } from './manage-version-listing/manage-version-listing.component';
import { ManageVersionAddComponent } from './manage-version-add/manage-version-add.component';

const contentroutes: Routes = [
    {
        path: '', component: ManageVersionComponent,
        children: [
            { path: '', component : ManageVersionListingComponent },
           { path: 'add', component : ManageVersionAddComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(contentroutes)],
    exports: [RouterModule]
})
export class ManageVersionRouterModule {
}
