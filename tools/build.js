/// <reference path="../typings/node/node.d.ts" />
var SystemBuilder = require('systemjs-builder');
var Path = require('path');
var yargs = require('yargs').argv;

console.log(yargs)
var defaultConfig = {
	paths: {
	  "app/*": "temp/*.js"
  },
  directories: {
	  "lib": "temp"
  }
}

if(!yargs.path || !yargs.outFile){
	throw 'include path and outfile args!'
}

var builder = new SystemBuilder(defaultConfig);

function build(){
	return builder.build(yargs.path, yargs.outFile, {minify: yargs.minify})
	  .then(function(){
		  console.log('built!');
		  process.exit(0);
	  })
	  .catch(function(err){
		  console.error(err);
		  process.exit(1);
	  });
}


if(yargs.configFile){
	console.info('loading config file')
	builder.loadConfig(yargs.configFile)
	  .then(function(){
		  builder.config(defaultConfig)
		  return build();
	  }).catch(function(err){
		  console.error(err);
		  process.exit(1)
	  })
}
else{
	build()
}



