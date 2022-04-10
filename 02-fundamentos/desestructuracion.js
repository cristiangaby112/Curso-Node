
const deadpool = {
  nombre: 'Wade',
  apellido: 'Winston',
  poder: 'Regeneracion',
  edad: 50,
  getnombre(){
    return `${this.nombre} ${this.apellido} ${this.poder}`
  }

}

function imprimeHeroe({nombre, apellido, poder, edad= 23}){

  // const {nombre, apellido, poder, edad= 23} = heroe
  
  console.log(nombre, apellido, poder, edad)
}

// 

const heroes = ['Deadpool', 'Superman', 'Batman'];

const [ h1, h2, h3] = heroes
// const [ , , h3] = heroes
console.log(h1, h2, h3)