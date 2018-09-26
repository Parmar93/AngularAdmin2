import { NgModule } from '@angular/core';
import { NotificationComponent } from './notification.component';
import { Routes, RouterModule } from '@angular/router';
import { NotificationListingComponent } from './notification-listing/notification-listing.component';
import { NotificationAddComponent } from './notification-add/notification-add.component';

const notificationroutes: Routes = [
    {
        path: '', component: NotificationComponent,
        children: [
            { path: '', component : NotificationListingComponent },
           { path: 'add', component : NotificationAddComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(notificationroutes)],
    exports: [RouterModule]
})
export class NotificationRouterModule {
}
