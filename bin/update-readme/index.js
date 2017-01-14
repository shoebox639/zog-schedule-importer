const fs = require('fs');
const Mustache = require('mustache');

fs.readFile('./dist/bookmarklet', (err, buffer) => {
  if (err) {
    throw err;
  }

  const bookmarklet = buffer.toString('utf8');

  fs.readFile('./bin/update-readme/readme.mustache', (err, buffer) => {
    if (err) {
      throw err;
    }

    const template = buffer.toString('utf8');

    const readmeContent = Mustache.render(template, { bookmarklet });

    fs.writeFile('./README.md', readmeContent, (err) => {
      if (err) {
        throw err;
      }
    });
  });
});

