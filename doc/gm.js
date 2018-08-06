const path = require('path');
const gm = require('gm');

const getUrl = path.resolve(__dirname, './path/image.jpg');

gm(getUrl)
  .resize(240, 240)
  .noProfile()
  .write(getUrl, function (err) {
    console.log(err)
    if (!err) console.log('done');
  });

console.log(gm);