import {Injectable} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {IOptions} from './interfaces/options';
import {store} from './store';
import 'reflect-metadata';

@Injectable()
export class JasperoBuilder {

    static baseTypes = ['String', 'Number', 'Boolean'];

    static dec(obj?: IOptions) {
        return function (target: any, key: string) {
            const t = Reflect.getMetadata('design:type', target, key),
                cn = target.constructor.name;

            let toSet = obj;

            if (typeof t.name === 'string' && JasperoBuilder.baseTypes.indexOf(t.name) === -1)  toSet = t.name;

            if (store[cn]) store[cn][key] = toSet;
            else store[cn] = {[key]: toSet};
        }
    }

    constructor(
        private _fb: FormBuilder
    ) {}

    buildFb(objFromStore: Object, originalObj: Object): Object {
        let final: any = {};
        for (let key in objFromStore) final[key] = typeof objFromStore[key] === 'string' ? this._fb.group(this.buildFb(store[objFromStore[key]], originalObj[key])) : this._setValue(objFromStore[key], originalObj[key]);
        return final;
    }

    createForm(cls: Object): FormGroup {
        return this._fb.group(this.buildFb(store[cls.constructor.name], cls))
    }

    private _setValue(fromStore: IOptions, originalObject: Object): any {
        let toReturn = fromStore.initial;
        if (originalObject) toReturn = Array.isArray(fromStore.initial) ?  [originalObject, ...fromStore.initial.slice(1)] : originalObject;
        return toReturn;
    }
}