import {Component, ChangeDetectionStrategy} from '@angular/core';
import {Test, TestNeste} from './test/test';
import {JasperoBuilder} from '@jaspero/ng2-form-builder/ng2-form-builder';
import 'reflect-metadata';

@Component({
    selector: 'my-app',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <p>Test</p>
  `,
})
export class AppComponent {
    constructor(private _jb: JasperoBuilder) {}

    testForm: any;

    ngOnInit() {
        this.testForm = this._jb.createForm(new Test());
        console.log(this.testForm);
        console.log('blap: ', this.testForm.getRawValue());
    }
}
