import { ContentComponent } from './content.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentListingComponent } from './content-listing/content-listing.component';
import { ContentAddComponent } from './content-add/content-add.component';

const contentroutes: Routes = [
    {
        path: '', component: ContentComponent,
        children: [
            { path: '', component : ContentListingComponent },
           { path: 'add', component : ContentAddComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(contentroutes)],
    exports: [RouterModule]
})
export class ContentRouterModule {
}
