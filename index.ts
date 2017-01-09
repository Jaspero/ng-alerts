import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AlertsComponent} from './src/alerts.component';
import {AlertsService} from './src/alerts.service';
import {AlertComponent} from './src/alert.component';

@NgModule({
    imports: [CommonModule],
    declarations: [
        AlertsComponent,
        AlertComponent
    ],
    providers: [AlertsService],
    exports: [AlertsComponent]
})
export class JasperoAlertsModule {}
