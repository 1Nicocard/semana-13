
/**
 * EJERCICIO 2:
 * ------------
 * Definir un Objeto ej: Libro
 * Ver que pasa  si se Guadar sin serializarlo
 * Serializar un Objeto para almacenarlo
 * Abrir y cerrar el navegador para ver que pasa en el Local Storage
 *  Abrir el enlace con otro navegador ¿Que pasa?
 * */ 


//serializar un objeto
const libro = {
    titulo: "100 años de soledad",
    autor: "Gabriela Garcias Marquez",
    nacionalidad: "colombiana",
}

const libroserializado = JSON.stringify(libro)
localStorage.setItem("libro",libroserializado)






