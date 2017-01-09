import {Injector} from '@angular/core';
import {TestBed, getTestBed} from '@angular/core/testing';
import {JasperoAlertsModule} from '../index';
import {AlertsService} from '../src/alerts.service';

describe('AlertsService', () => {
    let injector: Injector;
    let service: AlertsService;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [JasperoAlertsModule],
        });
        injector = getTestBed();
        service = injector.get(AlertsService);
    });

    it('is defined', () => {
        expect(AlertsService).toBeDefined();
        expect(service).toBeDefined();
        expect(service instanceof AlertsService).toBeTruthy();
    })
});