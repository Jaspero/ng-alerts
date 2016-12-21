import {Component, ChangeDetectionStrategy} from '@angular/core';

@Component({
    selector: 'my-app',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <p>Test</p>
  `,
})
export class AppComponent {

}
