import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {JasperoBuilder} from './src/jaspero-builder.service';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        JasperoBuilder
    ]
})
export class FormBuilderModule {

}