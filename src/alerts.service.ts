import {Injectable} from '@angular/core';
import {AlertEmit} from './interfaces/alert-emit';
import {Subject} from 'rxjs/Subject';
import {AlertSettings} from './interfaces/alert-settings';
import {AlertType} from './interfaces/alert-type';

@Injectable()
export class AlertsService {
    alert$: Subject<AlertEmit> = new Subject();

    create(type: AlertType, message: string, settingsOverrides: AlertSettings = {}) {
        this.alert$.next({type: type, message: message, override: settingsOverrides});
    }
}
