const empleados = [
    {
        id: 1,
        nombre: 'Miguel'
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
        salario: 5000
    }
];

const id = 3;

const getEmpleado = (id) => {

    return new Promise( (resolve, reject) => {
        
        const empleado = empleados.find((e) => e.id === id);

        (empleado)
            ? resolve(empleado)
            : reject(`No existe el empleado con id ${id}`);
    });
}

const getSalario = (id) => {

    return new Promise( (resolve, reject) =>{

        const salario = salarios.find( s => s.id === id);

        (salario)
            ? resolve(salario)
            : reject(`No existe el salario con id ${id}`);
    });

}

// CALLBACKS
// EJECUTAMOS AMBAS PROMESAS

let nombre;

getEmpleado(id)
    .then( empleado =>{ 
        nombre = empleado.nombre;
        return getSalario(id)
    })
    .then( salario => console.log(`El empleado ${nombre} tiene un sueldo de: ${salario.salario}` ))
    .catch( err => console.log(err));

