document.addEventListener('DOMContentLoaded', function () {
    // Inicializa el estado del botón de copiar
    actualizarEstadoBotonCopiar();
});

function encriptar() {
    const texto = document.getElementById('text-input').value.trim();
    const mensajeOutput = document.getElementById('message-output');
    const botonCopiar = document.querySelector('.copy-button-container');
    const errorMessageContainer = document.querySelector('.error-message');

    if (texto.length === 0) {
        mensajeOutput.textContent = '';
        mostrarMensajeError("Ningún mensaje fue encontrado", "Ingrese el texto que desea encriptar o desencriptar");
    } else if (/^[a-z\s]*$/.test(texto)) {
        // Reemplaza los caracteres por sus versiones encriptadas
        const textoEncriptado = texto
            .replace(/e/g, "enter")
            .replace(/i/g, "imes")
            .replace(/a/g, "ai")
            .replace(/o/g, "ober")
            .replace(/u/g, "ufat");

        mensajeOutput.textContent = textoEncriptado;
        botonCopiar.style.display = 'block'; // Muestra el botón de copiar
        ocultarMensajeError();
    } else {
        mensajeOutput.textContent = '';
        mostrarMensajeError("Ningún mensaje fue encontrado", "Ingrese solo letras minúsculas sin acentos ni caracteres especiales");
    }

    actualizarEstadoBotonCopiar();
}

function desencriptar() {
    const texto = document.getElementById('text-input').value.trim();
    const mensajeOutput = document.getElementById('message-output');
    const botonCopiar = document.querySelector('.copy-button-container');
    const errorMessageContainer = document.querySelector('.error-message');

    const textoEncriptado = mensajeOutput.textContent.trim(); // Obtén el texto encriptado del área de salida

    if (textoEncriptado.length === 0 && texto.length === 0) {
        mensajeOutput.textContent = '';
        mostrarMensajeError("Ningún mensaje fue encontrado", "Ingrese el texto que desea encriptar o desencriptar");
    } else {
        // Reemplaza las versiones encriptadas por sus caracteres originales
        const textoDesencriptado = textoEncriptado
            .replace(/enter/g, "e")
            .replace(/imes/g, "i")
            .replace(/ai/g, "a")
            .replace(/ober/g, "o")
            .replace(/ufat/g, "u");

        // Si el texto desencriptado es diferente al texto original, muestra el resultado
        if (textoEncriptado !== textoDesencriptado) {
            mensajeOutput.textContent = textoDesencriptado;
            botonCopiar.style.display = 'block'; // Muestra el botón de copiar
            ocultarMensajeError();
        } else {
            mensajeOutput.textContent = '';
            mostrarMensajeError("Ningún mensaje fue encontrado", "Ingrese el texto que desea encriptar o desencriptar");
        }
    }

    actualizarEstadoBotonCopiar();
}

function copiarTexto() {
    const texto = document.getElementById('message-output').textContent;

    if (texto && texto !== "Ningún mensaje fue encontrado") {
        navigator.clipboard.writeText(texto).then(() => {
            alert("Texto copiado al portapapeles");
        }).catch(err => {
            alert("Hubo un problema al copiar el texto: " + err);
        });
    } else {
        alert("No hay texto para copiar.");
    }
}

function mostrarMensajeError(mensajeError, mensajeSugerencia) {
    const mensajeErrorElem = document.querySelector('.error-text');
    const mensajeSugerenciaElem = document.querySelector('.error-suggestion');
    const errorMessageContainer = document.querySelector('.error-message');

    mensajeErrorElem.textContent = mensajeError;
    mensajeSugerenciaElem.textContent = mensajeSugerencia;
    errorMessageContainer.style.display = 'flex'; // Muestra el mensaje de error
}

function ocultarMensajeError() {
    const errorMessageContainer = document.querySelector('.error-message');
    errorMessageContainer.style.display = 'none'; // Oculta el mensaje de error
}

function actualizarEstadoBotonCopiar() {
    const texto = document.getElementById('message-output').textContent;
    const botonCopiar = document.querySelector('.copy-button-container');

    if (texto && texto !== "Ningún mensaje fue encontrado") {
        botonCopiar.style.display = 'block'; // Muestra el botón de copiar
    } else {
        botonCopiar.style.display = 'none'; // Oculta el botón de copiar
    }
}
