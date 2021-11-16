const MostrarInformacion = document.getElementsByClassName('MostrarInformacion');
const InformacionCerrar = document.querySelector('.Informacion-Cerrar');
const VerInformacion = document.querySelector('.VerInformacion');

const NuevoRegistro = document.querySelector('.NuevoRegistro');
const RegistrarCerrar = document.querySelector('.Registrar-IconoCerrar');

////////////////////////////////////////////////////////////
for (i = 0; i < MostrarInformacion.length; i++){
    MostrarInformacion[i].addEventListener('click', () => {
        VerInformacion.classList.add('Informacion-Mostrar');
    })
}
InformacionCerrar.addEventListener('click', () => {
    VerInformacion.classList.remove('Informacion-Mostrar');
})

////////////////////////////////////////////////////////////
NuevoRegistro.addEventListener('click', () => {
    RegistrarUsuario.classList.add('RegistrarUsuario-Mostrar');
})
RegistrarCerrar.addEventListener('click', () => {
    RegistrarUsuario.classList.remove('RegistrarUsuario-Mostrar');
})