import {Injector} from '@angular/core';
import {TestBed, getTestBed} from '@angular/core/testing';
import {FormBuilderModule} from '../index';
import {JasperoBuilder} from '../src/jaspero-builder.service';

describe('JasperoService', () => {
    let injector: Injector;
    let jasperoBuilder: JasperoBuilder;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [FormBuilderModule],
        });
        injector = getTestBed();
        jasperoBuilder = injector.get(JasperoBuilder);
    });

    it('is defined', () => {
        expect(JasperoBuilder).toBeDefined();
        expect(jasperoBuilder).toBeDefined();
        expect(jasperoBuilder instanceof JasperoBuilder).toBeTruthy();
    })
});