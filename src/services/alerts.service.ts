import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {AlertEmit} from '../interfaces/alert-emit';
import {AlertSettings} from '../interfaces/alert-settings';
import {AlertType} from '../interfaces/alert-type';

@Injectable()
export class AlertsService {
    alert$: Subject<AlertEmit> = new Subject();

    create(type: AlertType, message: string, override: AlertSettings = {}) {
        this.alert$.next({type: type, message: message, override: override});
    }
}
