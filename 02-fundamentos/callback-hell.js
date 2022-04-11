
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

const getEmpleado = (id, callbacks) => {

  const empleado = empleados.find((e) => e.id === id)?.nombre
  if (empleado) {
    callbacks(null, empleado);
  }else{
    callbacks(`Empleado con id ${id} no existe`);
  }

}

const getSalario = (id, callbacks) => {
  const salario = salarios.find((s) => s.id === id)?.salario

  if(salario) {
    callbacks(null, salario);
  }else{
    callbacks(`No existe salario para el empleado con id:${id}`);
  }
  
}

const id = 1

getEmpleado(id, (err, empleado) => {
  if(err){
    console.log('ERROR!')
    return console.log(err);
  }

  getSalario(id, (err, salario) => {
    if(err){
      console.log('ERROR!')
      return console.log(err);
    }
  
    console.log('Salario existe')
    console.log(`El empleado: ${empleado} tiene un salario: ${salario}`)
  })
})

