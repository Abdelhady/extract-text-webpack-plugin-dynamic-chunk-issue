require('../css/entry1.css');
console.log('Entry 1 reached');

document.body.innerHTML += '<div><h1>Entry 1 content</h1></div>';

import(
	/* webpackChunkName: "dynamic" */
	'./dynamic'
);
