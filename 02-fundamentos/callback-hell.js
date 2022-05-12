
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


const getEmpleado = ( id, callback ) =>{

    const empleado = empleados.find((e)=> e.id === id )
    
    if(empleado){
        //return empleado;
        callback( null, empleado);
    }else{
        callback(`El empleado con id ${id} no existe.`);
        //return `El empleado con id ${id} no existe.`
    }  
}


const getSalario = (id, callback) => {

    const salario = salarios.find((s) => s.id === id )

    if(salario){
        //return salario;
        callback(null, salario);
    }else{
        //return `Salario con id ${id} no existe`;
        callback(`Salario con id ${id} no existe`);
    }
}

const id = 3;

getEmpleado( id, ( err, empleado)=>{
    
    if(err){
        console.log('ERROR!');
        return console.log(err);
    }

    getSalario(id, (err, salario)=>{

        if(err){
            console.log('ERROR!');
            return console.log(err);
        }

        console.log(`El empleado: ${empleado.nombre} tiene un salario de: ${salario.salario}`);
    
        // console.log('Salario Existe');
        // return console.log(salario)
    
    })

    // console.log('Empleado Existe!');
    // console.log(empleado.nombre);
})


//console.log(getEmpleado(4));



// Mostrar el salario








