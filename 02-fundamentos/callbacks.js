
// setTimeout(function () {
//     console.log('hola mundo');
// },2000);

const getUsuarioByID = (id, callback) => {

    const usuario ={
        id,
        nombre: 'Luis'
    }

    setTimeout( () =>{
        callback(usuario);
    }, 1000);
}

// DESESTRUCTURADO
getUsuarioByID(10, ({nombre})=> {
    console.log(nombre);
    // console.log(res);
    // console.log(res.nombre.toUpperCase());
});

getUsuarioByID(10, ({res})=> {
    console.log(res);
    console.log(res.nombre.toUpperCase());
});





