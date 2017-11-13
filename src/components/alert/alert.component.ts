import {Component, HostBinding, Output, EventEmitter, OnInit, NgZone} from '@angular/core';
import {animate, keyframes, state, style, transition, trigger} from '@angular/animations';
import {AlertType} from '../../interfaces/alert-type';

@Component({
  selector: 'jaspero-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
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
    private _ngZone: NgZone
  ) {}

  @Output() close = new EventEmitter();
  @HostBinding('class') type: AlertType;

  animationState = 'enter';
  incomingData: any = {
    title: '',
    titleIsTemplate: false,
    message: '',
    messageIsTemplate: false,
    overlay: true,
    overlayClickToClose: true,
    showCloseButton: true,
    duration: 0
  };

  ngOnInit() {
    if (this.incomingData.duration) {
      this._ngZone.runOutsideAngular(() =>
        setTimeout(() =>
            this._ngZone.run(() =>
              this.closeSelf()
            ),
          this.incomingData.duration
        )
      );
    }
  }

  closeSelf() {
    this.animationState = 'leave';
    this.close.emit(Object.assign({close: true}, this.incomingData));
  }

  overlayClick() {
    if (!this.incomingData.overlayClickToClose) {
      return;
    }

    this.closeSelf();
  }
}
