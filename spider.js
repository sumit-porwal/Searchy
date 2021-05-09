const cheerio = require('cheerio');
const axios = require('axios');

function crawl(){
	let metaData,title,body;
	let result = axios(
	 	{
		 method:'get',
		 url:'https://google.com',
		 responseType: 'html'
	 	}
	).then((res)=>{
		const $ = cheerio.load(res.data);
		title = $('title').text();
		body = $('body').text();
		
		metaData = $('meta').map((i,el)=>
		$(el).attr('content')
		);
		
		return {metaData,title,body}
		
	}).catch(err=>console.error(err));
	return result;
}

crawl().then(re=>console.log(re));