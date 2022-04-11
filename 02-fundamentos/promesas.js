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

const id = 3

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

// getEmpleado(id)
//   .then(empleado => console.log(empleado))
//   .catch(err => console.log(err))

// getSalario(id)
//   .then(salario => console.log(salario))
//   .catch(err => console.log(err))
let nombre;
getEmpleado(id)
  .then(empleado =>  {
    nombre = empleado
    return getSalario(id)
  })
  .then(salario => console.log(`El empleado: ${nombre} tiene un salario: ${salario}`))
  .catch(err => console.log(err))