
var express = require('express');
var app = express();

app.get("/json", function(req, res){
  if(process.env.MESSAGE_STYLE === 'uppercase'){
    res.json({
      "message":"HELLO JSON"
    });
  }
  res.json({"message":"hello json"
  });
});

 module.exports = app;
