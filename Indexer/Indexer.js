const Queue = require('../crawler/Queue');
const axios = require('axios');
const {crawl} = require('../crawler/spider');
let SEED={
origin:"https://facebook.com",
} 

let Page_To_Visit = 5;
let pageVisited =[SEED];

const queue = new Queue();

function pushIndex(data){
axios({
	'method':'post',
	'url':'http://localhost:8080/index',
	'data':{
		"id":Math.random(),
		"link":data.url,
		"title":data.title,
		"description":data.description,
		"keywords":data.keyowrds
	},
}).then(console.log('pushed index')).catch(err=>console.error(err.message));
}

function index(){

	
	
	crawl((queue.getLink(pageVisited)).origin).then(res=>{
		pageVisited.push(queue.getLink(pageVisited));	
		pushIndex(res.Data)	
		for(let j in res.Links){
			queue.enqueue(res.Links[j]);
			
		}
		
		
	}).then(()=>{
		
			index();
			
		
	}).catch(err=>console.log(err.message));
	console.log((queue.getLink(pageVisited)).origin)
}

	

index();


