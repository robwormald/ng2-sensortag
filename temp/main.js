System.register(['babel/polyfill', 'reflect-metadata', 'angular2/angular2', './app', './foo'], function(exports_1) {
    var angular2_1, app_1, foo_1;
    return {
        setters:[
            function (_) {},
            function (_) {},
            function (_angular2_1) {
                angular2_1 = _angular2_1;
            },
            function (_app_1) {
                app_1 = _app_1;
            },
            function (_foo_1) {
                foo_1 = _foo_1;
            }],
        execute: function() {
            angular2_1.bootstrap(app_1.FooApp, [foo_1.Foo]);
        }
    }
});
