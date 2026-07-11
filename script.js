// Fecha objetivo: 31 de octubre a medianoche (00:00) del año actual.
// Si esa fecha ya pasó este año, apunta automáticamente al 31 de octubre del año siguiente.
function obtenerFechaHalloween() {
    const ahora = new Date();
    let anio = ahora.getFullYear();
    let objetivo = new Date(anio, 9, 31, 0, 0, 0); // mes 9 = octubre (0-indexado)

    if (ahora > objetivo) {
        objetivo = new Date(anio + 1, 9, 31, 0, 0, 0);
    }

    return objetivo;
}

const fechaHalloween = obtenerFechaHalloween();

const elDias = document.getElementById('dias');
const elHoras = document.getElementById('horas');
const elMinutos = document.getElementById('minutos');
const elSegundos = document.getElementById('segundos');

function actualizarContador() {
    const ahora = new Date().getTime();
    const distancia = fechaHalloween.getTime() - ahora;

    if (distancia <= 0) {
        elDias.textContent = '00';
        elHoras.textContent = '00';
        elMinutos.textContent = '00';
        elSegundos.textContent = '00';
        clearInterval(intervalo);
        return;
    }

    const dias = Math.floor(distancia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((distancia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((distancia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((distancia % (1000 * 60)) / 1000);

    elDias.textContent = String(dias).padStart(2, '0');
    elHoras.textContent = String(horas).padStart(2, '0');
    elMinutos.textContent = String(minutos).padStart(2, '0');
    elSegundos.textContent = String(segundos).padStart(2, '0');
}

actualizarContador();
const intervalo = setInterval(actualizarContador, 1000);