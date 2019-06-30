var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var graphQLHTTP = require('express-graphql');
var schema = require('./schema');

var app = express();

mongoose.connect('mongodb://localhost/bookstore', { useNewUrlParser: true } );

var db = mongoose.connection;

// middleware
app.use(bodyParser.json());

var port = process.env.PORT || 3000;



app.use('/graphql', graphQLHTTP({
    schema,
    graphiql : true,
}))

app.get('/', function(req, res){
    res.send('Hello World');
})



app.listen(port, () => {`Server starts at port ${port}`})