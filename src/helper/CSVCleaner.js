
class CSVCleaner {

csvHandler(req, res, filePath) {
console.log(filePath)
var fs = require('fs');
var args = process.argv;
var type = args[2] || 'text';
var arr = [];
var bufferString;
  fs.readFile(filePath, (err, data) => {

    if(err) {
      return console.log(err)
    }

    bufferString = data.toString();
    arr = bufferString.split('\n');
    

        var jsonObj = [];
    var headers = arr[0].split(',');
    for(var i = 1; i < arr.length; i++) {
      var data = arr[i].split(',');
      var obj = {};
      for(var j = 0; j < data.length; j++) {
         obj[headers[j].trim()] = data[j].trim();
      }
      jsonObj.push(obj);
    }
    JSON.stringify(jsonObj);
  return jsonObj
  });
 }
}

export default CSVCleaner;
