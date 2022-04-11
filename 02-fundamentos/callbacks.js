

// setTimeout(function() {
//   console.log('Hola Mundo')
// }, 1000)

const getUsuarioByID = (id, callbacks) => {

  const user ={
    id,
    nombre: 'Cristian'
  }

  setTimeout(function() {
    callbacks(user);
  }, 1500)
}

getUsuarioByID(10, (usuario) => {
  console.log(usuario.id);
  console.log(usuario.nombre.toUpperCase());
  console.log(usuario.nombre.toLowerCase());
});