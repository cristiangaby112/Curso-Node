const argv = require('yargs')
    .option('b', {
      alias: 'base',
      type: 'number',
      demandOption: true,
      describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
      alias: 'listar',
      type: 'boolean',
      default: false,
      describe: 'Muestra la tabla de la terminal'
    })
    .option('h', {
      alias: 'hasta',
      type: 'number',
      describe: 'Este es el numero hasta donde quiere la tabla'
    })
    .check((argv, options) => {
      if(isNaN(argv.b)) {
        throw 'La base tiene que ser un numero'
      }
      return true
    })
    .argv

    module.exports = argv;//exports por default