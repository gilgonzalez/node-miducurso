

const fs = require('node:fs/promises');

; (
  async () => { 
    const txt = await fs.readFile('./archivo.txt', 'utf8')
    console.log(txt)
  }
)()