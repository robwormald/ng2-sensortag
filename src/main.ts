/// <reference path="../typings/angular2/angular2.d.ts" />
import 'babel/polyfill';
import 'reflect-metadata';
import {bootstrap} from 'angular2/angular2';
import {FooApp} from './app';
import {Foo} from './foo';


bootstrap(FooApp,[Foo]);