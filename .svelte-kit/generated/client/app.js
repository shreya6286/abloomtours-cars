export { matchers } from './matchers.js';

export const nodes = [
	() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8')
];

export const server_loads = [];

export const dictionary = {
		"/": [2],
		"/carownlog": [3],
		"/carownreg": [4],
		"/cust-log": [5],
		"/cust-reg": [6],
		"/driverlog": [7],
		"/driverreg": [8]
	};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};

export { default as root } from '../root.svelte';