System.register([], function(exports_1) {
    var Foo;
    return {
        setters:[],
        execute: function() {
            Foo = (function () {
                function Foo() {
                    console.log('FOO!');
                }
                return Foo;
            })();
            exports_1("Foo", Foo);
        }
    }
});
