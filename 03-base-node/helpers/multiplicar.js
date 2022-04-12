const fs = require("fs");
const colors = require("colors");

const crearArchivoTabla = async (base = 5, listar, hasta = 10) => {
  try {
    let salida = "";
    let consola = "";

    for (let i = 1; i <= hasta; i++) {
      let result = i * base;
      salida +=`${base} X ${i} = ${result}\n`;
      console.log(salida);
      consola += `${base} ${colors.red('X')} ${i} = ${result}\n`;
    }

    if (listar) {
      console.log(colors.green("=================="));
      console.log(`   Tabla del: ${base}`);
      console.log(colors.green("=================="));
      console.log(consola);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return colors.green(`tabla-${base}.txt creado`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  crearArchivoTabla,
};
