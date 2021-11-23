const EliminarCita = document.querySelector(".Informacion-Eliminar");
const VerInformacionEliminarCita = document.querySelector(".VerInformacion");
const MensajeBorrarCita = document.querySelector(".MensajeBorrarCita");

const BtnMensajeBorrarCancelar = document.querySelector(".MensajeBorrarCitaCancelar");
const BtnMensajeBorrarAceptar = document.querySelector(".MensajeBorrarCitaAceptar");

EliminarCita.addEventListener('click', () => {
    MensajeBorrarCita.classList.add("MensajeBorrarCitaMostrar")
})
BtnMensajeBorrarCancelar.addEventListener('click', () => {
    MensajeBorrarCita.classList.remove("MensajeBorrarCitaMostrar")
})
BtnMensajeBorrarAceptar.addEventListener('click', () => {
    MensajeBorrarCita.classList.remove("MensajeBorrarCitaMostrar")
    VerInformacionEliminarCita.classList.remove("Informacion-Mostrar")
})
