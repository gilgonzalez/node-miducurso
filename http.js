const http = require('node:http')
const { findAvailablePort } = require('./free-port.js')

const portProduction = process.env.PORT ?? 3000
console.log(process.env.PORT)

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hello World')
})
// Poniendo el puerto 0, siempre buscará el primero que esté vacío
//! No recomendable para producción, esto es solo para desarrollo
// server.listen(0, () => {
//   console.log(`server is listening on port http://localhost:${server.address().port}`)
// })

findAvailablePort(portProduction)
  .then((port) => {
    server.listen(port, () => {
      console.log(`server is listening on port http://localhost:${port}`)
    })
  })
