/// <reference path="../typings/angular2/angular2.d.ts" />
import {Component, View, bootstrap} from 'angular2/angular2';
import {Foo} from './foo';

@Component({
	selector: 'sensortag-app',
	injectables: [Foo]
})
@View({
	template: 'hello angular2'
})
export class FooApp {
	
	constructor(private _foo:Foo){
		
	}
}