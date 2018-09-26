import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'users', loadChildren: './users/users.module#UsersModule' },
            { path: 'content', loadChildren: './content/content.module#ContentModule' },
            { path: 'manage-version', loadChildren: './manage-version/manage-version.module#ManageVersionModule' },
            { path: 'notification', loadChildren: './notification/notification.module#NotificationModule' },
            { path: 'subscription', loadChildren: './subscription/subscription.module#SubscriptionModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
