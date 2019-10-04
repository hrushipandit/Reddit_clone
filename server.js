const bodyParser = require('body-parser');
const expressValidator = require('express-validator');



// Set db
require('./data/reddit-db');
var express = require ('express');
var path = require ('path')
var app = express();
require('./controllers/posts.js')(app);

// Use Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Add after body parser initialization!
app.use(expressValidator());

app.get('/',function(req,resp)
{
  resp.sendfile('index.html',)
  {
    root: path.join(__dirname,'./files')
  }
}
)



app.listen(1337,function() {

  console.log('Listening at Port 1337');
});
