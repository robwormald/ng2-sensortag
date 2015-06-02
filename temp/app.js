var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};System.register(['angular2/angular2', './foo'], function(exports_1) {
    var angular2_1, foo_1;
    var FooApp;
    return {
        setters:[
            function (_angular2_1) {
                angular2_1 = _angular2_1;
            },
            function (_foo_1) {
                foo_1 = _foo_1;
            }],
        execute: function() {
            FooApp = (function () {
                function FooApp(_foo) {
                    this._foo = _foo;
                }
                FooApp = __decorate([
                    angular2_1.Component({
                        selector: 'sensortag-app',
                        injectables: [foo_1.Foo]
                    }),
                    angular2_1.View({
                        template: 'hello angular2'
                    }), 
                    __metadata('design:paramtypes', [foo_1.Foo])
                ], FooApp);
                return FooApp;
            })();
            exports_1("FooApp", FooApp);
        }
    }
});
