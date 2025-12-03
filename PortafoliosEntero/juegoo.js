let puntajeUsuario = 0;
let puntajeComputadora = 0;

const marcadorUsuario = document.getElementById('marcador-usuario');
const marcadorComputadora = document.getElementById('marcador-computadora');

const eleccionUsuarioElement = document.getElementById('eleccion-usuario');
const eleccionComputadoraElement = document.getElementById('eleccion-computadora');

const resultElement = document.getElementById('resultado');
const botonesOpcion = document.querySelectorAll('.opcion-btn');
const botonReiniciar = document.getElementById('reiniciar');

// Generar elección aleatoria de la computadora
function obtenerEleccionComputadora() {
  const opciones = ['piedra', 'papel', 'tijera'];
  const indiceAleatorio = Math.floor(Math.random() * 3);
  return opciones[indiceAleatorio];
}

// Determinar el ganador
function determinarGanador(eleccionUsuario, eleccionComputadora) {
  if (eleccionUsuario === eleccionComputadora) return 'empate';

  if (
    (eleccionUsuario === 'piedra' && eleccionComputadora === 'tijera') ||
    (eleccionUsuario === 'tijera' && eleccionComputadora === 'papel') ||
    (eleccionUsuario === 'papel' && eleccionComputadora === 'piedra')
  ) {
    return 'usuario';
  } else {
    return 'computadora';
  }
}

// Actualizar la interfaz
function actualizarInterfaz(eleccionUsuario, eleccionComputadora, resultado) {
  eleccionUsuarioElement.textContent = eleccionUsuario.toUpperCase();
  eleccionComputadoraElement.textContent = eleccionComputadora.toUpperCase();

  if (resultado === 'empate') {
    resultElement.textContent = '¡Empate!';
    resultElement.style.backgroundColor = '#f39c12';
    resultElement.style.color = 'white';
  } else if (resultado === 'usuario') {
    puntajeUsuario++;
    resultElement.textContent = '¡Ganaste esta ronda!';
    resultElement.style.backgroundColor = '#2ecc71';
    resultElement.style.color = 'white';
  } else {
    puntajeComputadora++;
    resultElement.textContent = 'La computadora gana esta ronda';
    resultElement.style.backgroundColor = '#e74c3c';
    resultElement.style.color = 'white';
  }

  marcadorUsuario.textContent = puntajeUsuario;
  marcadorComputadora.textContent = puntajeComputadora;
}

// Función principal del juego
function jugarRonda(evento) {
  const eleccionUsuario = evento.currentTarget.getAttribute('data-opcion');
  const eleccionComputadora = obtenerEleccionComputadora();
  const resultado = determinarGanador(eleccionUsuario, eleccionComputadora);
  actualizarInterfaz(eleccionUsuario, eleccionComputadora, resultado);
}

// Reiniciar el juego
function reiniciarJuego() {
  puntajeUsuario = 0;
  puntajeComputadora = 0;

  marcadorUsuario.textContent = '0';
  marcadorComputadora.textContent = '0';

  eleccionUsuarioElement.textContent = '-';
  eleccionComputadoraElement.textContent = '-';

  resultElement.textContent = '¡Elige una opción para comenzar!';
  resultElement.style.backgroundColor = '#ecf0f1';
  resultElement.style.color = '#333';
}

// Eventos
botonesOpcion.forEach(boton => {
  boton.addEventListener('click', jugarRonda);
});

botonReiniciar.addEventListener('click', reiniciarJuego);

// Inicializar
reiniciarJuego();
