import {BrowserModule} from '@angular/platform-browser';
import {Component, NgModule} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app',
  template: ``
})
class AppComponent {}

@NgModule({
  bootstrap: [ AppComponent ],
  declarations: [ AppComponent ],
  imports: [ BrowserModule ]
})
class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);
