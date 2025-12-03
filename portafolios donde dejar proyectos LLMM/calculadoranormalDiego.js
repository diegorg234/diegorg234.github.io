const pantalla = document.getElementById("pantalla");
const botones = document.querySelectorAll(".btn");

let operacion = "";

botones.forEach(boton => {
  boton.addEventListener("click", () => {
    const valor = boton.getAttribute("data-valor");

    if (valor === "C") {
      operacion = "";
      pantalla.textContent = "0";
    } 
    else if (valor === "⌫") {
      operacion = operacion.slice(0, -1);
      pantalla.textContent = operacion || "0";
    } 
    else if (valor === "=") {
      try {
        const resultado = eval(operacion);
        pantalla.textContent = resultado;
        operacion = resultado.toString();
      } catch {
        pantalla.textContent = "Error";
        operacion = "";
      }
    } 
    else {
      operacion += valor;
      pantalla.textContent = operacion;
    }
  });
});
