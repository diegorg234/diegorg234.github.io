const nombre = document.getElementById("nombre");
const edad = document.getElementById("edad");
const profesion = document.getElementById("profesion");
const contenedor = document.getElementById("contenedor");
const crear = document.getElementById("crear");

crear.addEventListener("click", async function() {
    // Validar campos
    if (nombre.value.trim() === "" || edad.value.trim() === "" || profesion.value.trim() === "") {
        alert("Por favor, completa todos los campos");
        return;
    }

    // Color según edad
    const colorFondo = parseInt(edad.value) < 18 ? "#a0c4ff" : "#b5e48c";

    // Crear tarjeta con imagen por defecto
    const tarjeta = document.createElement("div");
    tarjeta.classList.add("tarjeta");
    tarjeta.style.backgroundColor = colorFondo;

    tarjeta.innerHTML = `
        <img src="https://via.placeholder.com/150" alt="Foto de perfil">
        <h3>${nombre.value}</h3>
        <p>Edad: ${edad.value}</p>
        <p>Profesión: ${profesion.value}</p>
        <button class="eliminar">Eliminar</button>
    `;

    // Botón eliminar
    tarjeta.querySelector(".eliminar").addEventListener("click", () => {
        tarjeta.remove();
    });

    // Añadir tarjeta al contenedor
    contenedor.appendChild(tarjeta);

    // Limpiar campos
    nombre.value = "";
    edad.value = "";
    profesion.value = "";

    // Obtener imagen aleatoria en segundo plano
    try {
        const respuesta = await fetch("https://randomuser.me/api/");
        const data = await respuesta.json();
        const imagenUrl = data.results[0].picture.medium;
        tarjeta.querySelector("img").src = imagenUrl; // actualizar imagen
    } catch (error) {
        console.log("No se pudo cargar la imagen, se mantiene el placeholder.");
    }