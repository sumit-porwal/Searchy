'use strict';
const URL = require('url-parse');

function getLinks(page) {
	let Links = []
	page('a').map((i, el) => {
	Links.push(new URL(page(el).attr('href')));
});
return Links.filter(url=>{
	if(url.hostname)
		return url;
});
	// .catch(err=>console.log(err.message()));
}
module.exports = {
	getLinks,
}