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
			return meta[i].content;
	}
}
function getKeyword(body){
	return body.text().split(' ').filter(
		(elm)=>{if(elm.length>1) return elm;});
	

}
function getPageData(body){
	let title = body('title').text();
	let keyword =  getKeyword(body)
	let descirption = getDescription(body);
	return {title,keyword,descirption}
} 

module.exports = {
	getPageData,
}