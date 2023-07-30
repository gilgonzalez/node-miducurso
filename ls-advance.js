const fsPromises = require('fs/promises')
const path = require('node:path')
const picoColors = require('picocolors')

const folder = process.argv[2] ?? '.'
// funcion para recuperar la informacion de cada fichero de un folder
async function ls (folder) {
  let files
  try {
    // Recoge la informacion de cada fichero (directorio o archivo)
    files = await fsPromises.readdir(folder)
  } catch (error) {
    console.log(picoColors.red(`❌ No se pudo leer el directorio ${folder} ya que no existe`))
    process.exit(1)
  }
  const filesPromises = files.map(async file => {
    // Para formar el path, se utiliza el folder y el archivo en cuestion que hemos recuperado
    const filePath = path.join(folder, file)
    let fileStats
    try {
      // stat recupera la informacion del archivo
      fileStats = await fsPromises.stat(filePath) // información del archivo
    } catch (error) {
      console.log(`No se pudo leer el archivo ${filePath} ya que no existe`)
      process.exit(1)
    }
    // Aqui están algunas de las propiedades que nos interesan del archivo
    const isDirectory = fileStats.isDirectory()
    const fileType = isDirectory ? picoColors.blue('d') : picoColors.green('f')
    const filePermissions = fileStats.mode.toString(8).slice(-3)
    const fileSize = fileStats.size
    const fileModified = fileStats.mtime.toLocaleString()
    return `${fileType} ${picoColors.yellow(filePermissions)} ${file.padEnd(25)} ${picoColors.bold(fileSize.toString().padStart(10))} ${picoColors.bgWhite(fileModified)} `
  }
  )
  // Aqui se ejecutan todas las promesas de forma simultánea
  const filesInfo = await Promise.all(filesPromises)
  console.log(filesInfo.join('\n'))
}

ls(folder)
