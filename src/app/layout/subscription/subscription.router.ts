import { NgModule } from '@angular/core';
import { SubscriptionComponent } from './subscription.component';
import { Routes, RouterModule } from '@angular/router';
import { SubscriptionListingComponent } from './subscription-listing/subscription-listing.component';


const subscriptionroutes: Routes = [
    {
        path: '', component: SubscriptionComponent,
        children: [
            { path: '', component : SubscriptionListingComponent },
           
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(subscriptionroutes)],
    exports: [RouterModule]
})
export class SubscriptionRouterModule {
}
