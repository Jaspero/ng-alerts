import {ModuleWithProviders, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AlertComponent} from './components/alert/alert.component';
import {AlertsComponent} from './components/alerts/alerts.component';
import {AlertsService} from './services/alerts.service';

export * from './components/alerts/alerts.component';
export * from './components/alert/alert.component';
export * from './services/alerts.service';
export * from './interfaces/alert-emit';
export * from './interfaces/alert-settings';
export * from './interfaces/alert-type';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AlertsComponent,
    AlertComponent
  ],
  exports: [
    AlertsComponent
  ]
})
export class JasperoAlertsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: JasperoAlertsModule,
      providers: [AlertsService]
    };
  }
}
