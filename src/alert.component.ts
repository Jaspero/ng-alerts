import {Component, Injector, HostBinding, Output, EventEmitter, trigger, style, state, transition, animate, keyframes, OnInit, NgZone} from '@angular/core';
import {AlertType} from './interfaces/alert-type';

@Component({
    selector: 'jaspero-alert',
    template: `
        <div *ngIf="incomingData.overlay" class="overlay" [@overlayAn]="animationState" (click)="overlayClick()"></div>
        <div class="wrapper" [@wrapperAn]="animationState">
            <div class="close" *ngIf="incomingData.showCloseButton" (click)="closeSelf()">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 44 44">
                  <path d="M22 0C9.8 0 0 9.8 0 22s9.8 22 22 22 22-9.8 22-22S34.2 0 22 0zm3.2 22.4l7.5 7.5c.2.2.3.5.3.7s-.1.5-.3.7l-1.4 1.4c-.2.2-.5.3-.7.3-.3 0-.5-.1-.7-.3l-7.5-7.5c-.2-.2-.5-.2-.7 0l-7.5 7.5c-.2.2-.5.3-.7.3-.3 0-.5-.1-.7-.3l-1.4-1.4c-.2-.2-.3-.5-.3-.7s.1-.5.3-.7l7.5-7.5c.2-.2.2-.5 0-.7l-7.5-7.5c-.2-.2-.3-.5-.3-.7s.1-.5.3-.7l1.4-1.4c.2-.2.5-.3.7-.3s.5.1.7.3l7.5 7.5c.2.2.5.2.7 0l7.5-7.5c.2-.2.5-.3.7-.3.3 0 .5.1.7.3l1.4 1.4c.2.2.3.5.3.7s-.1.5-.3.7l-7.5 7.5c-.2.1-.2.5 0 .7z" fill="#FFF"/>
                </svg>
            </div>
            <div class="symbol" [ngSwitch]="type">
                <template ngSwitchCase="success">
                    <svg [@symbolAn]="animationState" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 426.667 426.667">
                        <path d="M213.333 0C95.518 0 0 95.514 0 213.333s95.518 213.333 213.333 213.333c117.828 0 213.333-95.514 213.333-213.333S331.156 0 213.333 0zM174.2 322.918l-93.936-93.93 31.31-31.31 62.625 62.622 140.893-140.898 31.31 31.31-172.204 172.206z" fill="#6AC259"/>
                    </svg>
                </template>
                
                <template ngSwitchCase="error">
                    <svg [@symbolAn]="animationState" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 426.667 426.667">
                        <path d="M213.333 0C95.513 0 0 95.514 0 213.333s95.514 213.333 213.333 213.333 213.333-95.514 213.333-213.333S331.153 0 213.333 0zm117.662 276.69l-54.302 54.305-63.36-63.356-63.36 63.36-54.302-54.31 63.357-63.357-63.356-63.36 54.303-54.302 63.36 63.357 63.36-63.356 54.302 54.303-63.356 63.36 63.355 63.356z" fill="#F05228" />
                    </svg>
                </template>
                
                <template ngSwitchCase="warning">
                    <svg [@symbolAn]="animationState" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 426.667 426.667">
                        <path d="M143.027 0C64.04 0 0 64.04 0 143.027c0 78.996 64.04 143.027 143.027 143.027 78.996 0 143.027-64.022 143.027-143.027C286.054 64.04 222.022 0 143.027 0zm0 259.236c-64.183 0-116.21-52.026-116.21-116.21S78.845 26.82 143.028 26.82s116.21 52.026 116.21 116.21-52.027 116.208-116.21 116.208zm.01-196.51c-10.245 0-17.996 5.346-17.996 13.98v79.202c0 8.644 7.75 13.972 17.996 13.972 9.994 0 17.995-5.55 17.995-13.972v-79.2c0-8.43-8-13.982-17.994-13.982zm0 124.997c-9.843 0-17.853 8.01-17.853 17.86 0 9.833 8.01 17.843 17.852 17.843s17.843-8.01 17.843-17.843c-.002-9.85-8.002-17.86-17.844-17.86z" fill="#E2574C" />
                    </svg>
                </template>
                
                <template ngSwitchCase="info">
                    <svg [@symbolAn]="animationState" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 426.667 426.667">
                        <path d="M496.158 248.085C496.158 111.063 385.088.003 248.083.003 111.07.003 0 111.063 0 248.085c0 137 111.07 248.07 248.083 248.07 137.006 0 248.075-111.07 248.075-248.07z" fill="#25B7D3" />
                        <path d="M138.216 173.592c0-13.915 4.467-28.015 13.403-42.297 8.932-14.282 21.972-26.11 39.11-35.486 17.14-9.374 37.134-14.063 59.985-14.063 21.238 0 39.99 3.92 56.25 11.755 16.26 7.838 28.818 18.495 37.683 31.97 8.86 13.48 13.293 28.125 13.293 43.945 0 12.452-2.526 23.367-7.58 32.74-5.054 9.375-11.062 17.468-18.018 24.278-6.96 6.812-19.446 18.275-37.463 34.388-4.982 4.542-8.976 8.535-11.976 11.976-3.004 3.442-5.24 6.59-6.702 9.446-1.466 2.857-2.603 5.713-3.406 8.57-.807 2.855-2.015 7.875-3.625 15.05-2.783 15.237-11.5 22.853-26.146 22.853-7.618 0-14.028-2.49-19.226-7.472-5.2-4.98-7.8-12.377-7.8-22.192 0-12.305 1.902-22.962 5.713-31.97 3.81-9.01 8.862-16.92 15.162-23.73 6.296-6.812 14.794-14.904 25.488-24.28 9.373-8.202 16.15-14.392 20.325-18.567 4.175-4.176 7.69-8.824 10.547-13.954 2.856-5.126 4.285-10.69 4.285-16.7 0-11.717-4.36-21.604-13.074-29.662-8.717-8.054-19.96-12.085-33.728-12.085-16.116 0-27.98 4.064-35.596 12.194-7.62 8.13-14.063 20.105-19.337 35.925-4.98 16.554-14.43 24.828-28.345 24.828-8.206 0-15.127-2.89-20.764-8.68-5.64-5.785-8.458-12.047-8.458-18.786zm107.226 240.82c-8.937 0-16.737-2.895-23.4-8.68-6.668-5.784-10-13.877-10-24.28 0-9.228 3.22-16.99 9.67-23.29 6.443-6.297 14.353-9.448 23.73-9.448 9.228 0 16.99 3.15 23.29 9.448 6.296 6.3 9.448 14.062 9.448 23.29 0 10.256-3.296 18.313-9.888 24.17-6.592 5.86-14.208 8.79-22.85 8.79z" fill="#FFF" />
                    </svg>
                </template>
            </div>
            <div class="message" [@messageAn]="animationState">{{incomingData.message}}</div>
            <div class="short">
                <p [@shortAn]="animationState">{{type}}!</p>
            </div>
        </div>
    `,
    styleUrls: ['./alert.css'],
    animations: [
        trigger('overlayAn', [
            state('void', style({opacity: 0})),
            state('leave', style({opacity: 0})),
            state('enter', style({opacity: 1})),
            transition('void => enter', animate('450ms ease-in-out')),
            transition('enter => leave', animate('450ms ease-in-out'))
        ]),
        trigger('wrapperAn', [
            state('void', style({opacity: 0, transform: 'scale(0.75, 0.75) translate(0, -100vh)'})),
            state('leave', style({opacity: 0, transform: 'scale(0.75, 0.75) translate(0, -100vh)'})),
            state('enter', style({opacity: 1, transform: 'scale(1, 1) translate(0, 0)'})),
            transition('void => enter', animate('450ms cubic-bezier(.5, 1.4, .5, 1)')),
            transition('enter => leave', animate('450ms cubic-bezier(.5, 1.4, .5, 1)'))
        ]),
        trigger('symbolAn', [
            state('void', style({opacity: 0, transform: 'rotate(90deg) scale(0.1, 0.1)'})),
            state('leave', style({opacity: 0, transform: 'rotate(90deg) scale(0.1, 0.1)'})),
            state('enter', style({opacity: 1, transform: 'rotate(0deg)'})),
            transition('void => enter', animate('450ms 100ms ease-in-out')),
            transition('enter => leave', animate('450ms 100ms ease-in-out'))
        ]),
        trigger('messageAn', [
            state('void', style({opacity: 0, transform: 'translate(0, 20px) scale(0.01, 0.01)'})),
            state('leave', style({opacity: 0, transform: 'translate(0, 20px) scale(0.01, 0.01)'})),
            state('enter', style({opacity: 1, transform: 'translate(0, 0)'})),
            transition('void => enter', animate('450ms 100ms ease-in-out')),
            transition('enter => leave', animate('450ms 100ms ease-in-out'))
        ]),
        trigger('shortAn', [
            transition('void => enter', [
                animate('450ms 200ms ease-in-out', keyframes([
                    style({opacity: 0, transform: 'scale(0, 0)', offset: 0}),
                    style({transform: 'scale(1.5, 1.5)', offset: 0.35}),
                    style({transform: 'scale(0.9, 0.9)',  offset: 0.85}),
                    style({opacity: 1, transform: 'scale(1, 1)',  offset: 1.0})
                ]))
            ])
        ])
    ]
})
export class AlertComponent implements OnInit {
    constructor(
        private _injector: Injector,
        private _ngZone: NgZone
    ) {}

    animationState: string = 'enter';

    @Output() close: EventEmitter<any> = new EventEmitter();
    @HostBinding('class') type: AlertType;

    incomingData: any = {
        message: '',
        overlay: true,
        overlayClickToClose: true,
        showCloseButton: true,
        duration: 0
    };

    ngOnInit() {
        this.type = this._injector.get('type');
        for (let key in this.incomingData) this.incomingData[key] = this._injector.get(key);

        if (this.incomingData.duration) {
            this._ngZone.runOutsideAngular(() =>
                setTimeout(() =>
                    this._ngZone.run(() =>
                        this.closeSelf()
                    ),
                    this.incomingData.duration
                )
            )
        }
    }

    closeSelf() {
        this.animationState = 'leave';
        this.close.emit(Object.assign({close: true}, this.incomingData))
    }

    overlayClick() {
        if (!this.incomingData.overlayClickToClose) return;
        this.closeSelf();
    }
}