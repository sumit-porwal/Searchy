const mongoose = require('mongoose');
const uri = "mongodb+srv://sumit:sumit@searchy.mnmws.mongodb.net/Searchy?retryWrites=true&w=majority";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connected');
});