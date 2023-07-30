const path = require('node:path');

//barra separadora de directorios
console.log(path.sep)

// unir rutas con path.join
const filepath = path.join('./content', 'subfolder', 'test.txt')
console.log(filepath)

// obtener el nombre del archivo
const base = path.basename(filepath)
console.log(base)
const filename = path.basename(filepath, '.txt')
console.log(filename)

// obtener la extension

const ext = path.extname(filepath)
console.log(ext)

// crear un objeto path