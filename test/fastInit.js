var min2phase = require('../min2phase.js');

const {
	PerformanceObserver,
	performance
} = require('perf_hooks');

var start = performance.now();
var search = new min2phase.Search();
start = performance.now();
console.log('Randomly solve a cube without initialization...');
console.log(min2phase.solve(min2phase.randomCube()));
console.log('Done in ', performance.now() - start, 'ms');