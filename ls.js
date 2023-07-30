const fs = require('node:fs');

fs.readdir('.', (err, files) => {
  if (err) {
    console.log('error al leer el directorrio: ', err)
    return;
  }

  files.forEach(file => {
    console.log(file)
  })
})

//* ESTA ES LA FORMA GUAY
const fsPromises = require('node:fs/promises');

fsPromises.readdir('.')
  .then(files => {
    files.forEach(file => {
      console.log(file);
    })
  })
  .catch(err => {
    console.error(err);
  })
