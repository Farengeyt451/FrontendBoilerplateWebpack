// import $ from 'jquery';
import {square} from './components/math.js';

function component() {
	var element = document.createElement('pre');
	element.innerHTML = [
		'Hello webpack!',
		'5 cubed is equal to ' + square(5)
	].join('\n\n');
	return element;
}

function sum(...nums) {
	return nums.reduce((acc, val) => acc + val);
}

console.log(sum(1, 4, 5, -20, -1, 0));

document.body.appendChild(component());
