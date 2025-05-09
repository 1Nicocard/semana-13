// Definir el Objeto Perfil
const perfil =
{
  nombre: "Juan Pérez",
  edad: 23,
  email: "juanperez@gmail.com",
  foto: "https://randomuser.me/api/portraits/men/3.jpg",
  hobbies: ["Leer", "Programar", "Ir a cine"]
};

// Almacenar el objeto en localStorage como cadena JSON
const perfilJSON = JSON.stringify(perfil);
console.log(perfilJSON);


// Recuperar el objeto desde localStorage
const perfilGuardado = JSON.parse(perfilJSON);
console.log(perfilGuardado);  // Mostrar los datos recuperados en la consola




// Mostrar los datos en el div con id="perfil"

const contenedor = document.getElementById("contenido");

contenedor.innerHTML = `
  <img src="${perfilGuardado.foto}">
  <p><strong>Nombre:</strong> ${perfilGuardado.nombre}</p>
  <p><strong>Edad:</strong> ${perfilGuardado.edad}</p>
  <p><strong>Email:</strong> ${perfilGuardado.email}</p>
  <p><strong>Hobbies:</strong></p>
  <ul>
    ${perfilGuardado.hobbies.map(hobby => `
      <li>
        <label>✅ ${ hobby}</label>
      </li>`).join('')}
  </ul>
`;