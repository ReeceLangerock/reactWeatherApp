var express = require("express");

var app = express();

var allowCrossDomain = function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
};

app.use(express.static("public"));
app.use(allowCrossDomain);

app.listen(3000, function() {
  console.log("express server is up");
});
