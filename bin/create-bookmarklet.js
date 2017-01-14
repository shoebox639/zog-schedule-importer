const fs = require('fs');
const urlencode = require('urlencode');

fs.readFile('./dist/out.js', (err, content) => {
  if (err) {
    throw err;
  }

  var stream = fs.createWriteStream("./dist/bookmarklet");
  stream.once('open', function(fd) {
    stream.write("javascript:");
    stream.write(urlencode(content));
    stream.end();
  });
});

