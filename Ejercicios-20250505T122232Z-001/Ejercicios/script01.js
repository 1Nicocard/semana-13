
/**
 * EJERCICIO 1:
 * ------------
 * Guardar Datos en el Local Storage con setItem(llave,valor)
 * Guardar un usuario, una edad, un email en el Local Storage
 * Recuperar del Local Storage usuario y edad con getItem()
 * Actualizar la edad del usuario
 * ver la logitud de Localstorage con length
 * Ver la posicion de una  llave con key(index)
 * Remover un valor del LocalStorage con removeItem("llave")
 * Limpar Todo el LocalStorage con clear()
 */

/**almacenar datos */
localStorage.setItem('usuario','Juan') 
localStorage.setItem('edad',34)
localStorage.setItem('email','juan@gmail.com')
localStorage.setItem('mascota','michi')

/**Recupero los datos del local storage */
const usuario = localStorage.getItem('usuario')
const edad = localStorage.getItem('edad')
const email = localStorage.getItem('email')

console.log(usuario);
console.log(edad);
console.log(email);

/**actualizar datos local storage*/
localStorage.setItem('edad',18) 

console.log(localStorage.length) /**ver la cantioodad de datos del storgae  en la consola*/


/**eliminar datos local storage*/
//localStorage.removeItem('mascota')
//localStorage.removeItem('edad')

console.log(localStorage.length) /**ver la cantioodad de datos del storgae  en la consola*/


const llave1 = localStorage.key(0) /**es para que aparesca el objeto del storage segun su posicion en la consola*/
const llave2 = localStorage.key(1)
console.log(llave1)
console.log(llave2)

localStorage.clear//es para borrar todas las variables
