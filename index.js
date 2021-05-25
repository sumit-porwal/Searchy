const spider = require('./crawler/spider');
const express = require('express');

const app = express();
app.set('view engine', 'ejs');
// spider.crawl().then(res => console.log(res));



app.use(express.urlencoded({
    extended: false
}));




app.get('/',(req, res) => {

	res.render('searchy.ejs')
});


app.listen(5000);