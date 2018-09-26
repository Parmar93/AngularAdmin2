import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbCarouselModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule as Ng2Charts } from 'ng2-charts'; 
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { StatModule } from '../../shared';
import { AgmCoreModule } from '@agm/core';

@NgModule({
    imports: [
        CommonModule,
        NgbCarouselModule.forRoot(),
        NgbAlertModule.forRoot(),
        DashboardRoutingModule,
        StatModule,
        Ng2Charts,
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyBIcz6G8n2gmEWcJrorAdJjgGl-7Bd3-jo'
          })
    ],
    declarations: [
        DashboardComponent,
       
    ]
})
export class DashboardModule {}
