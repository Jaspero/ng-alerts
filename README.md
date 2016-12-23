[![Build Status](https://travis-ci.org/Jaspero/ng2-form-builder.svg?branch=master)](https://travis-ci.org/flauc/angular2-notifications)
[![NPM Version](https://img.shields.io/npm/v/@jaspero/ng2-form-builder.svg)](https://www.npmjs.com/package/@jaspero/ng2-form-builder)
# NG2 Form-Builder
This library provides a faster and cleaner way to use Angular 2 Reactive Forms through typescript decorators.

## Setup
Import `FormBuilderModule` in your `@NgModule` and you're good to go: 

```ts
@NgModule({
    imports: [
        FormBuilderModule
    ],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {}
```

## How to use
To use this library simply create a class and add `@JasperoBuilder.dec()` decorators to each property:
```ts
export class User {
    @JasperoBuilder.dec({initial: ''})
    username: string;
    @JasperoBuilder.dec({initial: ''})
    password: string;
}
```
The `dec()` method accepts the same arguments as `new FormControl()` does and creates the `FormControl` 
 in the background.
 
Then in your component create the `FormGroup` like this: 
 
```ts
export class AppComponent {
    constructor(private _jb: JasperoBuilder) {}
    
    userForm: any;

    ngOnInit() {
        // You can also instantiate the class with values
        this.useForm = this._jb.createForm(new User());
    }
}
```


 
