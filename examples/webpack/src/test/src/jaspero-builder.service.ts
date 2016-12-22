import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {IOptions} from './interfaces/options';
import {store} from './store';
import 'reflect-metadata';

@Injectable()
export class JasperoBuilder {
    static dec(obj?: IOptions) {
        return function (target: any, key: string) {
            const t = Reflect.getMetadata('design:type', target, key),
                cn = target.constructor.name;

            let toSet = obj;

            if (typeof t.name === 'string' && this._baseTypes.indexOf(t.name) === -1)  toSet = t.name;

            if (store[cn]) store[cn][key] = toSet;
            else store[cn] = {[key]: toSet};
        }
    }

    constructor(
        private _fb: FormBuilder
    ) {}

    createForm(cls: Object): FormGroup {

        let className = cls.constructor.name;

        // TODO: Throw error if className invalid
        let final = Object.assign({}, store[className]);

        return this._fb.group(final)
    }

    private _baseTypes = ['String', 'Number', 'Boolean'];
}