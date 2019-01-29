require('../css/entry1.css');
console.log('Entry 1 reached');

document.body.innerHTML += '<div><h1>Entry 1 content</h1></div>';

setTimeout(() =>{
	import(
		/* webpackChunkName: "dynamic" */
		'./dynamic'
	);
}, 1000);
