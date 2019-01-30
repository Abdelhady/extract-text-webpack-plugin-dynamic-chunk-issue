# extract-text-webpack-plugin-dynamic-chunk-issue
To demonstrate an `extract-text-webpack-plugin` issue when loading dynamic chunks

My Environment:
* Node: v10.0.0
* Npm: 6.5.0
* Os: Ubuntu 16.04

Steps:
--

1. Clone or download the repo
2. run `npm i`
3. run `webpack`
3. open `node app.js`

and open `http://localhost:8080` in your browser


Details:
--
In order to postpone loading the css of dynamically imported chunks until they are being loaded in page, I'm setting the option `allChunks: false` in my webpack build, but then I found the following weird behaviour:

When `dynamic.css` is loaded only through the dynamically imported `dynamic.js`, everything works fine, 
where the extract plugin leave the `dynamic.css` to be inserted in page with `style-loader` as a fallback.

But the problem happens when loading `dynamic.css` twice, once in a dynamic chunk inside `entry1`, & another one in the other entry `entry2` directly, 
where the extract plugin extracts the `dynamic.css`, but doesn't inject it in `entry1`!


The expected behaviour should be:
--
* For `entry2`: `dynamic.css` should be part of the extracted css `entry2.css` --> which works fine
* For `entry1`: `dynamic.css` should be part of the dynamically imported chunk `dynamic.js`,
where the contents of `dynamic.css` will be injected in page with `style-loader` --> This doesn't work, instead `dynamic.css` is totally gone

**Note for incremental builds:** The behaviour mentioned here is for standalone builds of webpack, but incremental builds have a different behaviour where the `dynamic.css` will be part of `entry1.css`, which again is **not** the expected result.
