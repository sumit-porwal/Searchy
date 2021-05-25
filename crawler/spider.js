const cheerio = require('cheerio');
const {getData} = require('./downloader');
const {getPageData}= require('./getPageData');
const url = 'https://www.facebook.com'

function crawl() {
	return getData(url).then((res) => {
			const $ = cheerio.load(res);
					
			return getPageData($);
				
		})
		.catch((err) => console.error(err));
	
}
crawl()
.then(res=>{	
		console.log(res);		
	});
module.exports = {
	crawl,
} 