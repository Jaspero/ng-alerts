[![Build Status](https://travis-ci.org/Jaspero/ng2-alerts.svg?branch=master)](https://travis-ci.org/jaspero/ng2-alerts)
[![NPM Version](https://img.shields.io/npm/v/@jaspero/ng2-alerts.svg)](https://www.npmjs.com/package/@jaspero/ng2-alerts)
# NG2 Alerts
An easy to use alert library for Angular 2.

## Setup
Import `JasperoAlertsModule` in your `@NgModule`: 

```ts
@NgModule({
    imports: [
        JasperoAlertsModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}
```

Then create the component in a root component (you can create it anywhere but you can only use it in that component on any lower ones).

```html
<jaspero-alerts [defaultSettings]="options"></jaspero-alerts>
```

## How To Use 
You need to import `JasperoAlertsService` in your component. 

## Options


 
