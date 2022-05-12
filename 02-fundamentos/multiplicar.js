const fs = require('fs');


const crearArchivo = (base = 5) =>{

    console.clear();
    console.log('==================');
    console.log('  TABLA del', base);
    console.log('==================');

    let salida = '';

    for ( let i=1; i<=10; i++) { 
        salida += `${base} X ${i} = ${base*i}\n`;    
    }

    console.log(salida);

    fs.writeFileSync(`tabla-${base}.txt`, salida);

    console.log(`tabla-${base}.txt creado`);

}

module.exports = {
    crearArchivo
}




