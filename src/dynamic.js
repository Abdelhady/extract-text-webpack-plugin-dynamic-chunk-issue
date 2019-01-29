require('../css/dynamic.css');
console.log('Loaded dynamically');

document.body.innerHTML += `
	<div>
		<h1>
			Now dynamic chunk has been loaded
			<span class='no-dynamic-yet'>
				But css does not load
			</span>
			<span class='dynamic-has-loaded'>
				& css has been loaded
			</span>
		</h1>
	</div>
`;
