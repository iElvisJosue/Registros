const EliminarContacto = document.querySelector(".Form-ContactoEliminar");
const BuscarContactoEliminar = document.querySelector(".BuscarContacto");
const MensajeBorrarContacto = document.querySelector(".MensajeBorrarContacto");

const BtnMensajeBorrarContactoCancelar = document.querySelector(".MensajeBorrarContactoCancelar");
const BtnMensajeBorrarContactoAceptar = document.querySelector(".MensajeBorrarContactoAceptar");

EliminarContacto.addEventListener('click', () => {
    MensajeBorrarContacto.classList.add("MensajeBorrarContactoMostrar")
})
BtnMensajeBorrarContactoCancelar.addEventListener('click', () => {
    MensajeBorrarContacto.classList.remove("MensajeBorrarContactoMostrar")
})
BtnMensajeBorrarContactoAceptar.addEventListener('click', () => {
    MensajeBorrarContacto.classList.remove("MensajeBorrarContactoMostrar")
    BuscarContactoEliminar.classList.remove("BuscarContacto-Mostrar")
})