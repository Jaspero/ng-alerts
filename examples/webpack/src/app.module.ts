import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {FormBuilderModule} from './test/index';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {JasperoBuilder} from './test/src/jaspero-builder.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        FormBuilderModule
    ],
    providers: [
        JasperoBuilder
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}
