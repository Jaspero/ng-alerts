import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AlertsService, AlertType} from '@jaspero/ng2-alerts';

@Component({
    selector: 'app',
    styleUrls: ['./../assets/scss/main.scss'],
    encapsulation: ViewEncapsulation.None,
    templateUrl: './app.html'
})
export class AppComponent {
    constructor(private _alert: AlertsService) {}

    type: AlertType = 'success';
    message: string = '';
    overlay: boolean = true;
    overlayClickToClose: boolean = true;
    showCloseButton: boolean = true;
    duration: number = 5000;

    types: string[] = [
        'success',
        'error',
        'warning',
        'info'
    ];
    bool: boolean[] = [true, false];

    open() {
        this._alert.create(
            this.type,
            this.message,
            {
                overlay: this.overlay,
                overlayClickToClose: this.overlayClickToClose,
                showCloseButton: this.showCloseButton,
                duration: this.duration
            }
        )
    }
}