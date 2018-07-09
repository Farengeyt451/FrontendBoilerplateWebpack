// import $ from 'jquery';
import {square} from './components/math.js';
import printMe from './components/print.js';

import 'normalize.css';
import '../style/main.scss';
import '../style/style.css';

function component() {
	var element = document.createElement('pre');
	element.innerHTML = [
		'Hello webpack!',
		'10 cubed is equal to ' + square(10)
	].join('\n\n');
	return element;
}

function sum(...nums) {
	return nums.reduce((acc, val) => acc + val);
}

printMe();

console.log($);
console.log(jQuery);

console.log(`I get called from index.js! ${sum(1, 4, 5, -20, -1, 0)}`);

document.body.appendChild(component());
