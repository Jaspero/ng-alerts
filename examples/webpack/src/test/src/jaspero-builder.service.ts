import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {IOptions} from './interfaces/options';
import {store} from './store';
import 'reflect-metadata';

@Injectable()
export class JasperoBuilder {
    static dec(obj: IOptions) {
        return function (target: any, key: string) {
            const t = Reflect.getMetadata('design:type', target, key),
                cn = target.constructor.name;

            if (store[cn]) store[cn][key] = obj;
            else store[cn] = {[key]: obj};

            console.log(store);
        }
    }

    constructor(
        private _fb: FormBuilder
    ) {}

    createForm(className: string): FormGroup {

        // TODO: Throw error if className invalid
        let final = Object.assign({}, store[className]);

        return this._fb.group(final)
    }
}