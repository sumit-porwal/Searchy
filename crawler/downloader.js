const axios = require('axios');

function getData(url){
	return axios(url,{
		method: 'get',
		url: url,
		responseType: 'html',
	}).then(res=>res.data);
}

module.exports = {
	getData,
}