
class Queue{
	constructor(){
		this.items = [{
			origin:"https://www.twitter.com"
		}]
	}
	isEmpty(){
    return this.items.length == 0;
	}
	front(){
   if(this.isEmpty())
        return "No elements in Queue";
    return this.items[0];
}
	enqueue(data){
		this.items.push(data);
	}
	dequeue(){
		if(this.isEmpty())
    	    return "Underflow";
    	return this.items.shift();
	}
	getLink(pageVisited){
		for(let i in this.items){
			for(let j in pageVisited){
				if(this.items[i].origin==pageVisited[j].origin){
					break;
				}
				if(j == pageVisited.length-1){
					
					return this.items[i];
				}
			}
		}
		return {
			origin:"https://google.com"
		}
		
}
	printQueue(){
		var str = "";
		for(let i in this.items)
		{   str += this.items[i].origin +" ";}
		
		return str;
	}
}

module.exports =Queue;