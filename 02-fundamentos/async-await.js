const empleados = [
  {
    id: 1,
    nombre: 'Fernando'
  },
  {
    id: 2,
    nombre: 'Linda'
  },
  {
    id: 3,
    nombre: 'Karen'
  }
];

const salarios = [
  {
    id: 1,
    salario: 1000
  },
  {
    id: 2,
    salario: 1500
  }
];

const id = 1

const getEmpleado = (id) => {

  const promesa = new Promise((resolve, reject) => {
    
    const empleado = empleados.find((e) => e.id === id)?.nombre
    empleado ? resolve(empleado) : reject(`No existe empelado con el id ${id}`)
    
    // if(empleado) {
    //   resolve(empleado)
    // }else {
    //   reject(`No existe empelado con el id ${id}`)
    // }

  })
  return promesa
};

const getSalario = (id) => {

  return new Promise((resolve, reject) => {
    const salario = salarios.find(s => s.id === id)?.salario
    salario ? resolve(salario) : reject(`No existe salario con el id ${id}`)
  })
};

const getInfoUsuario = async(id) => {
  try {
    const empleado = await getEmpleado(id);
    const salario = await getSalario(id);
    return `El salario del empleado: ${empleado} es el salario: ${salario}`

  } catch (err) {
    return err
  }

}

getInfoUsuario(id)
  .then(msg => console.log(msg))
  .catch(err => console.log(err))