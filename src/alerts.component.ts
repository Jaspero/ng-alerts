import {Component, OnInit, ViewContainerRef, OnDestroy, Input, ReflectiveInjector, ComponentFactoryResolver, ViewChild} from '@angular/core';
import {AlertsService} from './alerts.service';
import {AlertSettings} from './interfaces/alert-settings';
import {AlertComponent} from './alert.component';

@Component({
    selector: 'jaspero-alerts',
    entryComponents: [AlertComponent],
    template: `<div #comp></div>`
})
export class AlertsComponent implements OnInit, OnDestroy {
    constructor(
        private _service: AlertsService,
        private _resolver: ComponentFactoryResolver
    ) { }

    @ViewChild('comp', {read: ViewContainerRef}) compViewContainerRef: ViewContainerRef;

    @Input() set defaultSettings(settings: AlertSettings) {
        this.settings = Object.assign({}, this.settings, settings);
    }

    settings: AlertSettings = {
        overlay: true,
        overlayClickToClose: true,
        showCloseButton: true,
        duration: 3000
    };

    private _current: any;
    private _latestSub: any;
    private _listener: any;

    ngOnInit() {

        this._listener = this._service.alert$.subscribe(alert => {
            if (this._current) {
                if (alert.close) setTimeout(() => this._destroy(), 450);
                else this._destroy();
            }

            if (alert.close) return;

            let settingsFinalAsArray = [];

            for (let key in this.settings) {
                let toUse = alert.override[key] !== undefined ? alert.override[key] : this.settings[key];
                settingsFinalAsArray.push({key: key, value: toUse});
            }

            let inputProviders = [
                    {key: 'message', value: alert.message},
                    {key: 'type', value: alert.type},
                    ...settingsFinalAsArray
                ].map((input) => {
                    return {provide: input.key, useValue: input.value};
                }),
                resolvedInputs = ReflectiveInjector.resolve(inputProviders),
                injector = ReflectiveInjector.fromResolvedProviders(resolvedInputs, this.compViewContainerRef.parentInjector),
                factory = this._resolver.resolveComponentFactory(AlertComponent),
                component = factory.create(injector);

            this.compViewContainerRef.insert(component.hostView);

            this._current = component;

            this._latestSub = component.instance.close.subscribe((res: any) => {
                this._service.alert$.next(res);
            });
        });
    }


    private _destroy() {
        /*
            We run the check twice in case the component timed out
            This can happen on short durations
         */

        if (this._current) {
            this._current.destroy();
            this._current = null;
        }
        this._latestSub.unsubscribe();
    }

    ngOnDestroy() {
        this._listener.unsubscribe();
    }
}
