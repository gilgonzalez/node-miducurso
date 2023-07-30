const fs = require('node:fs')

const stats = fs.statSync('./archivo.txt')

console.log('directorio', stats.isDirectory())
console.log('fichero', stats.isFile())
console.log('enlace simbolico', stats.isSymbolicLink())
console.log('Tamaño', stats.size)
console.log('Creacion', stats.birthtime)