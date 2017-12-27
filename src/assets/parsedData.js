import './precinct8.csv';

var fs = require('fs');
var http = require('http');
var url = require('url');

var args = process.argv;
var type = args[2] || 'text';
var arr = [];
var bufferString;

const csvHandler = (req, res) => {
  fs.readFile('precinct8.csv', (err, data) => {

    if(err) {
      return console.log(err)
    }
    bufferString = data.toString();
    arr = bufferString.split('\n');
    console.log(arr);

    for(i = 0; i < arr.length; i++) {
      JSON.stringify(arr[i]);
    }
    JSON.parse(arr);
    res.send(arr);
  })
  console.log(csvHandler)

}
