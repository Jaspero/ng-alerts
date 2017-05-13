import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AlertsComponent} from './src/alerts.component';
import {AlertsService} from './src/alerts.service';
import {AlertComponent} from './src/alert.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

export * from './src/alert.component';
export * from './src/alerts.component';
export * from './src/alerts.service';
export * from './src/interfaces/alert-emit';
export * from './src/interfaces/alert-settings';
export * from './src/interfaces/alert-type';

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
