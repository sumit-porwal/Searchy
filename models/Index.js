const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const IndexSchema = new Schema({
	url:{
		type:String,
		required:true
	},
	title:{
		type:String,
		required:true
	},
	keyword:{
		type:Array,
		required:true
	},
	description:{
		type:String,
		required:true
	}

	
},{timestamps:true});

const Index = mongoose.model('page',IndexSchema);

module.exports = Index;