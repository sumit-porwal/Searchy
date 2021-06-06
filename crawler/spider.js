'use strict';
const cheerio = require('cheerio');
const {getData} = require('./downloader');
const {getPageData}= require('./getPageData');
const {getLinks}=require('./getLinks');

function crawl(url) {
	return getData(url).then((res) => {
			const $ = cheerio.load(res);
			let Links = getLinks($);
			let Data = getPageData($);
			Data.url = url;
			return {
				Links,
				Data,
			}
				
		})
		.catch((err) => console.error(err.message));
	
}

module.exports = {
	crawl,
} 