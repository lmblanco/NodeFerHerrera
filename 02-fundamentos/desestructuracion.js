
const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneracion',
    getNombre(){
        return `${this.nombre}${this.apellido}`
    }
}

// OBJETOS
// opcion 1
// function imprimeHeroe(heroe) {
//     const { nombre, apellido, edad = 0 } = deadpool;
//     console.log(nombre, apellido, edad);
// }

// opcion 2
// function imprimeHeroe({ nombre, apellido, edad = 0 }) {
//     console.log(nombre, apellido, edad);
// }

// imprimeHeroe(deadpool);

// const { nombre, apellido, edad = 0 } = deadpool;

// console.log(nombre, apellido, edad);
// console.log(deadpool);

//************************************************** */
// ARREGLOS
const heroes = ['deadpool', 'Superman' ,'Batman'];

// const h1 = heroes[0];
// console.log(h1);

const [h1, h2] = heroes;
console.log(h1,h2);




