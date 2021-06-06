'use strict';
const cheerio = require('cheerio');


function getMeta(body){
	let metaData = [];
	body('meta').each(function (i, el) {
			metaData.push(body(el).attr())
		});
	return metaData;
}
function getDescription(body){
	let meta = getMeta(body);
	for(let i in meta){
		if(meta[i].name == 'description')
			if(meta[i].content)
				return meta[i].content;
	}
	return body('body').text().substring(0,200) + "....."
}
function getKeyword(body){

	return body('h1').text().split(' ').filter(
		(elm)=>{if(elm.length>1) return elm;});
	

}
function getPageData(body){
	let title = body('title').text();

	let keywords =  getKeyword(body);
	console.log(body('h1').text());
	let description = getDescription(body);
	return {title,keywords,description}
} 

module.exports = {
	getPageData,
}