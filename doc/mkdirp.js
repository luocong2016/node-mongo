
const fs = require('fs');
const path = require('path');

const url = path.resolve(__dirname, './temp');
console.log(url);

fs.mkdir(url, 0777, function (err) {
  if (err) {
    return console.error(err);
  }
  console.log("temp");
});
