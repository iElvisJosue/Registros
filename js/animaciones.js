const MostrarInformacion = document.getElementsByClassName('MostrarInformacion');
const InformacionCerrar = document.querySelector('.Informacion-Cerrar');
const VerInformacion = document.querySelector('.VerInformacion');


for (i = 0; i < MostrarInformacion.length; i++){
    MostrarInformacion[i].addEventListener('click', () => {
        VerInformacion.classList.add('Informacion-Mostrar');
    })
}
InformacionCerrar.addEventListener('click', () => {
    VerInformacion.classList.remove('Informacion-Mostrar');
})