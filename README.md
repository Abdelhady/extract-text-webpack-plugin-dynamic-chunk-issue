# extract-text-webpack-plugin-dynamic-chunk-issue
To demonstrate an `extract-text-webpack-plugin` issue when loading dynamic chunks

Steps:

1. Clone or download the repo
2. run `npm i`
3. run `webpack`
3. open `node app.js`

and open `http://localhost:8080` in your browser


Details:
--
When `dynamic.css` is loaded only through the dynamically imported `dynamic.js`, everything works fine, 
where the extract plugin leave the `dynamic.css` to be inserted in page with `style-loader` as a fallback.

But problem happens when loading `dynamic.css` twice, once in a dynamic chunk, & another one in the other entry directly, 
where the extract plugin extracts the `dynamic.css`, but doesn't inject it elsewhere!
