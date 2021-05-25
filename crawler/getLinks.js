const cheerio = require('cheerio');
function getLinks(page) {
	const $ = cheerio.load(page);
	return $('a').map((i, el) => {
		$(el).attr('href');
	});
	// .catch(err=>console.log(err.message()));
}