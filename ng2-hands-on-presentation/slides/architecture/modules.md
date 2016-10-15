##ng2 Modules

<img src="img/module.png" />

Note:
+ Angular is modular
    + Every app has _at least_ one module, usually `AppModule`
    + Some larger apps can have feature modules
        + Cohesive blocks of closely related code
        + e.g.: AngularFire2 library
+ Angular modules
    + Class with `@NgModule` decorator.
+ Decorators
    + Functions that modify JS classes.
    + Attach metadata to classes so ng2 knows about classes, how they work
+ NgModule
    + `declarations`: View classes that belong to the module (Components, directives, pipes)
    + `exports`: Subset of declarations visible/usable in component templates of other modules.
        + The root module has no reason to export anything because other components don't need to import the root module.
    + `imports`: Other modules whose exported classes are needed by component templates in this module.
    + `providers`: Creators of services that this modules contributes to the global service group.
        + Accessible in all parts of the app.
    + `bootstrap`: The main application view (root component).  Only should be set in the _root module_.
+ Application is launched by _bootstrapping_ the root module.
    + Done in `main.ts`.
+ JavaScript modules
    + Unrelated to Angular modules
    + Each _file_ is a module and all object in the file belong to that module.
    + Declare public with `export` keyword.
        + e.g.: `export class AppModule {...}`
    + Module systems are complimentary; can be used together.