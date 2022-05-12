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


id = 1;
getEmpleado(id)
    .then(empleado => console.log(empleado))
    .catch(err => console.log(err));

getSalario(id)
    .then(salario => console.log(salario))
    .catch(err => console(err));


// ANIDADAS LAS FUNCIONES
// NO HACER ESTO
getEmpleado(id)
    .then( empleado =>{

        getSalario(id)
            .then(salario => {

                console.log('El empleado:', empleado.nombre, ' tiene una salario de:', salario.salario );
            })
            .catch(err => console.log(err));
    })
    .catch(err => console.log(err));

// const getEmpleado3 = ( id, callback ) =>{

//     const empleado = empleados.find((e)=> e.id === id )
    
//     if(empleado){
//         callback( null, empleado);
//     }else{
//         callback(`El empleado con id ${id} no existe.`);
//     }  
// }



