import 'core-js';
import 'zone.js/dist/zone';
import 'ts-helpers';

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {AppModule} from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);