// Obtener elementos
const entrada = document.getElementById('entrada');
const salida = document.getElementById('salida');

// Decimal → Binario
function convertirABinario() {
    let valor = entrada.value.trim();
    if (valor === "" || isNaN(valor)) {
        salida.textContent = "Introduce un número decimal válido";
        return;
    }
    let decimal = parseInt(valor);
    salida.textContent = decimal.toString(2);
}

// Binario → Decimal
function convertirADecimal() {
    let valor = entrada.value.trim();
    if (!/^[01]+$/.test(valor)) {
        salida.textContent = "Introduce un número binario válido";
        return;
    }
    let decimal = parseInt(valor, 2);
    salida.textContent = decimal;
}

// Limpiar
function limpiar() {
    entrada.value = "";
    salida.textContent = "0";
}
