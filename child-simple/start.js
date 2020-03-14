const express = require('express');
const path = require('path');
const app = express();

app.all((req, res, next) => {
  res.set({'Access-Control-Allow-Origin': '*'});
  next();
});

let options = {
  setHeaders: function (res, path, stat) {
    res.set('Access-Control-Allow-Origin', '*')
  }
}

app.use(express.static(path.join(__dirname, './public'), options));

app.listen('3002', () => {
  console.log('child-simple running');
});