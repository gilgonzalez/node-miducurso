const os = require('node:os');

console.log('Nombre del sistema operativo', os.platform())
console.log('Version del sistema operativo', os.release())
console.log('Nombre', os.arch())
console.log('N cpus', os.cpus())
console.log('Memoria libre', os.freemem()/1024/1024)
console.log('Memoria total', os.totalmem() / 1024 / 1024)
console.log('tiempo encendido', os.uptime()/3600)
