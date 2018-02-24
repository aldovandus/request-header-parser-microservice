var express = require('express');
var app = express();

app.use(express.static('public'));

app.get("/", function (request, response) {
  var ip = request.headers['x-forwarded-for'].split(",")[0] || request.connection.remoteAddress;
  var lang = request.headers["accept-language"].split(",")[0];
  var software = request.headers["user-agent"].match(/\((.+?)\)/)[1];
  
  response.json({"ipaddress:":ip,"language":lang,"software": software});
});


// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
