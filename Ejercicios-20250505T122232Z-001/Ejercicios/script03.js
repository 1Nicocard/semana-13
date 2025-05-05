
/** 
 * EJERCICIO 3:
 * ------------
 *  Recupera  el objeto guardado y Verlo por  consola
 *  DeSerializar un Objeto almacenado y Verlo por consola
 *  Eliminar el Objeto y volvera consultar (si no esite devuelve null)
 *  Validar antes de mostrar el objeto recuperado
 *  Mostrar los datos recuperado en el contenedor html
 **/ 

//Deserializar

const libro = JSON.parse (localStorage.getItem('libro'))
/** 
//console.log(libro)acceder de forma general a todos los objetos
console.log(libro.titulo);//acceder a un objeto especifico
console.log(libro.autor);
console.log(libro.nacionalidad);
*/
//si el libro no esta

if(libro==null){
    console.log("Noy  hay libros")
}else {
    console.log(libro.titulo);
    console.log(libro.autor);
    console.log(libro.nacionalidad);
    const contenedor = document.querySelector('#contenedor')
    contenedor.innerHTML = `
    <h1>libro: ${libro.titulo}</h1>
    <p>Autor: ${libro.autor}</p>
    <p>Nacionalidad: ${libro.nacionalidad}</p>
    `
}

