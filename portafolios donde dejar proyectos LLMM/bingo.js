let numeros = Array.from({length: 100}, (_, i) => i + 1);
let usados = [];

window.onload = function() {
    const tabla = document.getElementById("tabla");

    for (let fila = 0; fila < 10; fila++) {
        let tr = document.createElement("tr");

        for (let col = 1; col <= 10; col++) {
            let num = fila * 10 + col;
            let td = document.createElement("td");
            td.id = "n" + num;
            td.textContent = num;
            tr.appendChild(td);
        }
        tabla.appendChild(tr);
    }
};

function sacarNumero() {
    if (numeros.length === 0) {
        alert("Ya no quedan números");
        return;
    }

    let indice = Math.floor(Math.random() * numeros.length);
    let numeroSacado = numeros[indice];

    const resultado = document.getElementById("Resultado");

    // Animación
    resultado.style.transform = "scale(1.3)";
    resultado.style.color = "#16a34a";

    setTimeout(() => {
        resultado.textContent = numeroSacado;
        resultado.style.transform = "scale(1)";
        resultado.style.color = "#dc2626";
    }, 150);

    // Marcar número sacado
    let td = document.getElementById("n" + numeroSacado);
    td.classList.add("sacado");

    usados.push(numeroSacado);
    numeros.splice(indice, 1);
}

function limpiarBingo() {
    numeros = Array.from({length: 100}, (_, i) => i + 1);
    usados = [];

    for (let i = 1; i <= 100; i++) {
        document.getElementById("n" + i).classList.remove("sacado");
    }

    const resultado = document.getElementById("Resultado");
    resultado.textContent = "-";
    resultado.style.color = "#dc2626";
    resultado.style.transform = "scale(1)";
}
