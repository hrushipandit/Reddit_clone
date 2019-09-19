var express = require ('express');
var path = require ('path')
var app = express();

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